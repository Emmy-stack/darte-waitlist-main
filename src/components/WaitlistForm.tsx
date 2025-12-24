import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { supabase } from "@/integrations/supabase/client";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";

const categories = [
  { value: "all", label: "All Categories" },
  { value: "men", label: "Men" },
  { value: "women", label: "Women" },
  { value: "gadgets", label: "Gadgets" },
  { value: "clothing", label: "Clothing" },
  { value: "jewelry", label: "Jewelry" },
  { value: "gifts", label: "Gifts" },
];

type FormState = "idle" | "loading" | "success" | "error";

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState<"buyer" | "seller">("buyer");
  const [category, setCategory] = useState("all");
  const [formState, setFormState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("loading");
    setErrorMessage("");

    try {
      const { error } = await supabase.from("waitlist").insert({
        email: email.toLowerCase().trim(),
        role,
        category_interest: category,
      });

      if (error) {
        if (error.code === "23505") {
          setErrorMessage("This email is already on the waitlist.");
          setFormState("error");
        } else {
          setErrorMessage("Something went wrong. Please try again.");
          setFormState("error");
        }
        return;
      }

      setFormState("success");
    } catch {
      setErrorMessage("Something went wrong. Please try again.");
      setFormState("error");
    }
  };

  if (formState === "success") {
    return (
      <div className="w-full max-w-md mx-auto animate-scale-in">
        <div className="bg-surface-elevated border border-border rounded-xl p-8 text-center gold-glow">
          <CheckCircle2 className="w-16 h-16 text-emerald-600 mx-auto mb-4" />
          <h3 className="font-display text-2xl font-semibold text-foreground mb-2">
            You're on the list 🎉
          </h3>
          <p className="text-muted-foreground">
            We'll notify you when Darté launches.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md mx-auto space-y-6 animate-fade-up"
      style={{ animationDelay: "0.3s" }}>
      <div className="bg-surface-elevated border border-border rounded-xl p-6 md:p-8 space-y-6 gold-glow">
        {/* Email Input */}
        <div className="space-y-2">
          <Label
            htmlFor="email"
            className="text-sm font-medium text-foreground">
            Email Address
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="bg-background border-border focus:border-gold focus:ring-gold/20 transition-all duration-300"
          />
        </div>

        {/* Role Selection */}
        <div className="space-y-3">
          <Label className="text-sm font-medium text-foreground">
            I want to...
          </Label>
          <RadioGroup
            value={role}
            onValueChange={(value) => setRole(value as "buyer" | "seller")}
            className="flex gap-4">
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                value="buyer"
                id="buyer"
                className="border-muted-foreground text-emerald-600 data-[state=checked]:border-emerald-600 data-[state=checked]:bg-gold"
              />
              <Label
                htmlFor="buyer"
                className="cursor-pointer text-foreground hover:text-gold transition-colors">
                Buy
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                value="seller"
                id="seller"
                className="border-muted-foreground text-emerald-600 data-[state=checked]:border-emerald-600 data-[state=checked]:bg-gold"
              />
              <Label
                htmlFor="seller"
                className="cursor-pointer text-foreground hover:text-gold transition-colors">
                Sell
              </Label>
            </div>
          </RadioGroup>
        </div>

        {/* Category Selection */}
        <div className="space-y-2">
          <Label className="text-sm font-medium text-foreground">
            Interested in
          </Label>
          <Select value={category} onValueChange={setCategory}>
            <SelectTrigger className="bg-background border-emerald-600 focus:border-emerald-600 focus:ring-emerald-600 transition-all duration-300">
              <SelectValue placeholder="Select a category" />
            </SelectTrigger>
            <SelectContent className="bg-popover border-border">
              {categories.map((cat) => (
                <SelectItem
                  key={cat.value}
                  value={cat.value}
                  className="focus:bg-surface-elevated focus:text-gold cursor-pointer">
                  {cat.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Error Message */}
        {formState === "error" && (
          <div className="flex items-center gap-2 text-destructive text-sm animate-fade-in">
            <AlertCircle className="w-4 h-4" />
            <span>{errorMessage}</span>
          </div>
        )}

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={formState === "loading"}
          className="w-full bg-emerald-600 text-primary-foreground hover:bg-gold-light font-medium py-6 transition-all duration-300 hover:shadow-lg hover:shadow-gold/20">
          {formState === "loading" ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Joining...
            </>
          ) : (
            "Join the Waitlist"
          )}
        </Button>
      </div>
    </form>
  );
}
