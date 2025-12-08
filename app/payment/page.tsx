"use client"

import { useState } from "react"
//import { pay, getPaymentStatus } from "@base-org/account"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, Loader2, AlertCircle, ShieldCheck } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

const RECIPIENT_ADDRESS = "0x749B7b7A6944d72266Be9500FC8C221B6A7554Ce"
const AMOUNT = "50.00"
const TESTNET = false

type PaymentStatus = "idle" | "processing" | "completed" | "failed"

export default function CheckoutPage() {
  const [paymentStatus, setPaymentStatus] = useState<PaymentStatus>("idle")
  const [transactionId, setTransactionId] = useState<string>("")
  const [error, setError] = useState<string>("")

  const handlePayment = async () => {
    try {
      setPaymentStatus("processing")
      setError("")

      // Initiate payment with Base Pay
      const { id } = await pay({
        amount: AMOUNT,
        to: RECIPIENT_ADDRESS,
        testnet: TESTNET,
      })

      setTransactionId(id)

      // Poll for payment status
      const pollPaymentStatus = async () => {
        try {
          const { status } = await getPaymentStatus({
            id,
            testnet: TESTNET,
          })

          if (status === "completed") {
            setPaymentStatus("completed")
          } else if (status === "failed") {
            setPaymentStatus("failed")
            setError("Payment failed. Please try again.")
          } else {
            // Continue polling
            setTimeout(pollPaymentStatus, 2000)
          }
        } catch (err) {
          console.error("Error checking payment status:", err)
          setPaymentStatus("failed")
          setError("Error checking payment status")
        }
      }

      // Start polling
      setTimeout(pollPaymentStatus, 1000)
    } catch (err: any) {
      console.error("Payment error:", err)
      setPaymentStatus("failed")
      setError(err.message || "Payment failed. Please try again.")
    }
  }

  const BasePayButton = () => (
    <button
      type="button"
      onClick={handlePayment}
      disabled={paymentStatus === "processing"}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "12px 16px",
        backgroundColor: "green",
        color:"white",
        border: "none",
        borderRadius: "8px",
        cursor: paymentStatus === "processing" ? "not-allowed" : "pointer",
        fontFamily: "system-ui, -apple-system, sans-serif",
        minWidth: "180px",
        height: "44px",
        opacity: paymentStatus === "processing" ? 0.7 : 1,
        transition: "opacity 0.2s",
      }}
    >
      {paymentStatus === "processing" ? (
        <Loader2 className="h-5 w-5 animate-spin text-white" />
      ) : (
        "Pay"
      )}
    </button>
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-xl">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
            <ShieldCheck className="h-8 w-8 text-blue-600" />
          </div>
          <CardTitle className="text-2xl font-bold">Facture</CardTitle>
          <CardDescription>Payez en toute sécurité</CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Product Details */}
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-semibold text-gray-900">Consultation</h3>
                <p className="text-sm text-gray-600">Avec un spécialiste</p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-gray-900">{60}TND</p> 
              </div>
            </div>

            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-semibold text-gray-900">Analyse médicale</h3>
                <p className="text-sm text-gray-600">Examens complémentaires</p>
              </div>
              <div className="flex flex-col justify-end items-end text-right">
                <p className="text-2xl font-bold text-gray-900">{35}TND</p> 
              </div>
            </div>
          </div>

          {/* Résumé des coûts */}
  <div className="mt-6 p-4 bg-white rounded-lg shadow">
    <h3 className="font-semibold text-gray-900 mb-3">Résumé</h3>

    <div className="flex justify-between text-gray-700 mb-1">
      <span>Sous-total (HT)</span>
      <span>{95} TND</span>
    </div>

    <div className="flex justify-between text-gray-700 mb-1">
      <span>TVA (19%)</span>
      <span>{18.05} TND</span>
    </div>

    <div className="border-t mt-3 pt-3 flex justify-between">
      <span className="font-bold text-gray-900 text-lg">Total TTC</span>
      <span className="font-bold text-gray-900 text-lg">{113.05} TND</span>
    </div>
  </div>
          {/* Payment Status */}
          {paymentStatus === "completed" && (
            <Alert className="border-green-200 bg-green-50">
              <CheckCircle className="h-4 w-4 text-green-600" />
              <AlertDescription className="text-green-800">
                Payment successful! Your transaction has been confirmed on Base.
              </AlertDescription>
            </Alert>
          )}

          {paymentStatus === "failed" && error && (
            <Alert className="border-red-200 bg-red-50">
              <AlertCircle className="h-4 w-4 text-red-600" />
              <AlertDescription className="text-red-800">{error}</AlertDescription>
            </Alert>
          )}

          {paymentStatus === "processing" && (
            <Alert className="border-blue-200 bg-blue-50">
              <Loader2 className="h-4 w-4 text-blue-600 animate-spin" />
              <AlertDescription className="text-blue-800">
                Processing your payment... This usually takes less than 2 seconds.
              </AlertDescription>
            </Alert>
          )}

          {/* Transaction ID */}
          {transactionId && (
            <div className="text-center">
              <p className="text-sm text-gray-600">Transaction ID:</p>
              <p className="text-xs font-mono bg-gray-100 p-2 rounded break-all">{transactionId}</p>
            </div>
          )}
        </CardContent>

        <CardFooter className="flex flex-col space-y-4">
          {paymentStatus !== "completed" && <BasePayButton />}

          {paymentStatus === "completed" && (
            <Button className="w-full" onClick={() => window.location.reload()}>
              Payer
            </Button>
          )}

          <div className="text-center">
            <p className="text-xs text-gray-500">Powered by Base Pay • Secure USDC payments on Base</p>
            <p className="text-xs text-gray-400 mt-1">
              Recipient: {RECIPIENT_ADDRESS.slice(0, 6)}...{RECIPIENT_ADDRESS.slice(-4)}
            </p>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}
