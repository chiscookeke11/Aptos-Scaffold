"use client"
import { ArrowRightLeft } from "lucide-react"
import { useEffect, useState } from "react"

type CurrencyRates = {
  usd: number
  ngn: number
  eur: number
}

type RatesData = {
  aptos: CurrencyRates
  bitcoin: CurrencyRates
  ethereum: CurrencyRates
}

export default function Page() {
  const [rates, setRates] = useState<RatesData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [selectedToken, setSelectedToken] = useState<keyof RatesData>("aptos")
  const [fromCurrency, setFromCurrency] = useState<string>("APTOS")
  const [toCurrency, setToCurrency] = useState<string>("USD")
  const [fromValue, setFromValue] = useState<string>("")
  const [toValue, setToValue] = useState<string>("")

  const convertCurrency = (value: string, isFromInput: boolean) => {
    if (!rates || !value || isNaN(Number(value))) {
      if (isFromInput) {
        setToValue("")
      } else {
        setFromValue("")
      }
      return
    }

    const numValue = Number(value)
    const rate = rates[selectedToken]?.usd
    if (!rate) return

    if (isFromInput) {
      if (fromCurrency === "USD") {
        // USD to Token
        const converted = numValue / rate
        setToValue(converted.toFixed(8))
      } else {
        // Token to USD
        const converted = numValue * rate
        setToValue(converted.toFixed(2))
      }
    } else {
      // converting to input (reverse calculation)
      if (toCurrency === "USD") {
        // USD to Token
        const converted = numValue / rate
        setFromValue(converted.toFixed(8))
      } else {
        // Token to USD
        const converted = numValue * rate
        setFromValue(converted.toFixed(2))
      }
    }
  }

  const handleFromValueChange = (value: string) => {
    setFromValue(value)
    convertCurrency(value, true)
  }

  const handleToValueChange = (value: string) => {
    setToValue(value)
    convertCurrency(value, false)
  }

  useEffect(() => {
    const fetchRates = async () => {
      try {
        setLoading(true)
        setError(null)
        const response = await fetch(
          "https://api.coingecko.com/api/v3/simple/price?ids=aptos,ethereum,bitcoin&vs_currencies=usd,ngn,eur",
        )

        if (!response.ok) {
          throw new Error("Failed to fetch rates")
        }

        const data = await response.json()
        setRates(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch rates")
        console.error("Error fetching rates:", err)
      } finally {
        setLoading(false)
      }
    }

    fetchRates()
  }, [])

  const switchCurrencies = () => {
    const newFromCurrency = toCurrency
    const newToCurrency = fromCurrency
    const newFromValue = toValue
    const newToValue = fromValue

    setFromCurrency(newFromCurrency)
    setToCurrency(newToCurrency)
    setFromValue(newFromValue)
    setToValue(newToValue)
  }

  const handleTokenChange = (token: keyof RatesData) => {
    setSelectedToken(token)
    const tokenUpper = token.toUpperCase()

    // Reset to default: Token -> USD
    setFromCurrency(tokenUpper)
    setToCurrency("USD")
    setFromValue("")
    setToValue("")
  }




  return (
    <div className="w-full h-screen flex items-center justify-center px-4 py-5 bg-[#171717] font-space-grotesk  ">
      <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg h-fit py-8 px-6 flex flex-col items-center gap-6">
        <h1 className="font-bold text-2xl md:text-4xl text-gray-800">Crypto Converter</h1>

        <div className="flex gap-2 mb-4">
          {(["aptos", "bitcoin", "ethereum"] as const).map((token) => (
            <button
              key={token}
              type="button"
              onClick={() => handleTokenChange(token)}
              className={`px-6 py-3 rounded-lg capitalize font-medium transition-all duration-200 cursor-pointer ${
                selectedToken === token
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {token}
            </button>
          ))}
        </div>

        <div className="w-full flex items-center justify-between gap-4 text-black  ">
          {/* From input */}
          <div className="flex flex-col items-center gap-2 flex-1">
            <span className="font-semibold text-gray-600">{fromCurrency}</span>
            <input
              type="text"
              value={fromValue}
              onChange={(e) => handleFromValueChange(e.target.value)}
              placeholder="0.00"
              className="border-2 border-gray-200 focus:border-blue-500 outline-none w-full p-4 text-lg font-semibold rounded-lg text-center transition-colors"
            />
          </div>

          {/* Switch button */}
          <button
            type="button"
            className="mt-6 p-2 hover:bg-gray-100 rounded-full transition-colors"
            onClick={switchCurrencies}
          >
            <ArrowRightLeft size={24} className="text-gray-600" />
          </button>

          {/* To input */}
          <div className="flex flex-col items-center gap-2 flex-1">
            <span className="font-semibold text-gray-600">{toCurrency}</span>
            <input
              type="text"
              value={toValue}
              onChange={(e) => handleToValueChange(e.target.value)}
              placeholder="0.00"
              className="border-2 border-gray-200 focus:border-blue-500 outline-none w-full p-4 text-lg font-semibold rounded-lg text-center transition-colors"
            />
          </div>
        </div>

        {rates && (
          <div className="text-center">
            <div className="text-sm text-gray-600 mb-1">Current Rate</div>
            <div className="text-lg font-semibold text-gray-800">
              1 {selectedToken.toUpperCase()} = ${rates[selectedToken]?.usd?.toFixed(2)} USD
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
