"use client"

import { useState } from "react"
import { BrainCircuit, Loader2, Sparkles } from "lucide-react"

import type { Animal, Recommendation } from "@/lib/types"
import { requestRecommendations } from "@/lib/api"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const symptomPresets = [
  "ishal və köp",
  "tənəffüs çətinliyi",
  "dəri qaşınması",
  "parazit nəzarəti",
  "profilaktik vaksin",
]

export function AssistantSection({ animals }: { animals: Animal[] }) {
  const [symptomInput, setSymptomInput] = useState("")
  const [selectedAnimal, setSelectedAnimal] = useState<string>("")
  const [recommendations, setRecommendations] = useState<Recommendation[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setError(null)

    const symptoms = symptomInput
      .split(",")
      .map((symptom) => symptom.trim())
      .filter(Boolean)

    if (symptoms.length === 0) {
      setError("Zəhmət olmasa ən azı bir simptom daxil edin.")
      return
    }

    setLoading(true)
    try {
      const result = await requestRecommendations({
        symptoms,
        animal: selectedAnimal || undefined,
        limit: 3,
      })
      setRecommendations(result)
      if (result.length === 0) {
        setError("Uyğun məhsul tapılmadı. Simptomları daha dəqiq qeyd edin.")
      }
    } catch (error) {
      console.error("Assistant request failed", error)
      setError("Assistentə qoşulmaq alınmadı. Daha sonra yenidən cəhd edin.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section
      id="assistant"
      className="page-section animate-in fade-in slide-in-from-bottom-10 rounded-3xl border border-border bg-surface px-4 md:px-6"
    >
      <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="grid h-12 w-12 place-items-center rounded-full bg-brand/10 text-brand">
              <BrainCircuit className="h-6 w-6" />
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-foreground">AI məhsul asistenti</h2>
              <p className="text-sm text-muted">
                Simptomları daxil edin, Agrovet kataloqundan təhlükəsiz məhsul tövsiyələri əldə edin.
              </p>
            </div>
          </div>

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="space-y-2 animate-in fade-in slide-in-from-left-8 duration-500">
              <label className="text-sm font-medium text-foreground">Simptomlar (vergüllə ayırın)</label>
              <Textarea
                rows={4}
                placeholder="Məsələn: ishal, yemə marağın azalması, tənəffüs çətinliyi"
                value={symptomInput}
                onChange={(event) => setSymptomInput(event.target.value)}
              />
            </div>

            <div className="animate-in fade-in slide-in-from-right-8 duration-500 delay-100">
              <label className="text-sm font-medium text-foreground">Heyvan növü (istəyə bağlı)</label>
              <div className="mt-3 flex flex-wrap gap-2">
                {[{ slug: "", name: "Bütün heyvanlar" }, ...animals].map((animal) => {
                  const active = selectedAnimal === animal.slug
                  return (
                    <button
                      key={animal.slug || "all"}
                      type="button"
                      onClick={() => setSelectedAnimal(animal.slug)}
                      className={cn(
                        "rounded-full border px-3 py-1 text-xs font-medium transition",
                        active
                          ? "border-brand bg-brand/10 text-brand-strong"
                          : "border-border bg-surface text-muted hover:border-brand/40 hover:text-brand"
                      )}
                    >
                      {animal.name}
                    </button>
                  )
                })}
              </div>
            </div>

            <div className="flex flex-wrap gap-2 animate-in fade-in slide-in-from-bottom-6 duration-500 delay-150">
              {symptomPresets.map((symptom) => (
                <button
                  key={symptom}
                  type="button"
                  onClick={() =>
                    setSymptomInput((prev) => (prev ? `${prev}, ${symptom}` : symptom))
                  }
                  className="inline-flex items-center gap-1 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-muted transition hover:border-brand/40 hover:text-brand"
                >
                  <Sparkles className="h-3 w-3" />
                  {symptom}
                </button>
              ))}
            </div>

            <Button type="submit" disabled={loading} className="rounded-full px-6 py-3 animate-in fade-in">
              {loading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Analiz edilir...
                </>
              ) : (
                "Tövsiyə al"
              )}
            </Button>

            {error && (
              <p className="text-sm font-medium text-red-500 animate-in fade-in">
                {error}
              </p>
            )}
          </form>
        </div>

        <div className="flex flex-col justify-between rounded-2xl border border-border bg-surface p-6 shadow-subtle animate-in fade-in slide-in-from-right-8">
          <div>
            <h3 className="text-lg font-semibold text-foreground">Tövsiyə nəticələri</h3>
            <p className="mt-2 text-sm text-muted">
              Məhsul detalları üzrə qərar qəbul etməzdən öncə baytar həkiminizlə məsləhətləşməyi unutmayın.
            </p>
          </div>

          <div className="mt-4 space-y-4 overflow-y-auto pr-1">
            {recommendations.length === 0 && !error && (
              <div className="rounded-2xl border border-dashed border-border bg-surface px-4 py-5 text-sm text-muted animate-in fade-in">
                Simptomları daxil edin və AI tövsiyələrini görün.
              </div>
            )}

            {recommendations.map((item, index) => (
              <div
                key={item.product.slug}
                className="rounded-2xl border border-border bg-surface/90 p-4 shadow-sm animate-in fade-in slide-in-from-bottom-5"
                style={{ animationDelay: `${index * 90}ms` }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold text-foreground">{item.product.name}</p>
                    {item.product.summary && (
                      <p className="mt-1 text-xs text-muted">{item.product.summary}</p>
                    )}
                    {item.product.categories && item.product.categories.length > 0 && (
                      <p className="mt-2 text-[10px] uppercase tracking-wide text-muted">
                        {item.product.categories.map((cat) => cat.name).join(", ")}
                      </p>
                    )}
                  </div>
                  <span className="rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold text-brand-strong">
                    {item.score.toFixed(2)}
                  </span>
                </div>
                <p className="mt-3 text-xs text-muted">{item.rationale}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
