import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, Users, Handshake, CheckCircle } from "lucide-react";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";

const formSchema = z.object({
  fullName: z.string().trim().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  phone: z.string().trim().min(8, "Please enter a valid phone number").max(20),
  type: z.enum(["volunteer", "partner"], { required_error: "Please select an option" }),
  organization: z.string().trim().max(150).optional(),
  message: z.string().trim().min(10, "Please tell us a bit more (at least 10 characters)").max(1000),
});

type FormValues = z.infer<typeof formSchema>;

const PartnerVolunteerForm = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      type: undefined,
      organization: "",
      message: "",
    },
  });

  const selectedType = form.watch("type");

  const onSubmit = (data: FormValues) => {
    console.log("Form submitted:", data);
    setSubmitted(true);
    toast({
      title: "Application Received!",
      description: `Thank you ${data.fullName}, we'll be in touch soon.`,
    });
  };

  return (
    <section id="get-involved" className="py-14 sm:py-20 md:py-28 bg-background" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-10 sm:mb-14"
        >
          <p className="font-body text-xs sm:text-sm tracking-[0.2em] uppercase text-accent mb-2 sm:mb-4 font-semibold">
            Get Involved
          </p>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-5xl text-foreground leading-tight mb-3 sm:mb-4">
            Join Our <span className="text-gradient-gold">Mission</span>
          </h2>
          <p className="font-body text-muted-foreground text-sm sm:text-base leading-relaxed">
            Whether you want to volunteer your time or partner with us organizationally,
            fill out the form below and our team will reach out to you.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          {submitted ? (
            <div className="bg-card rounded-2xl p-8 sm:p-12 shadow-elevated text-center border border-border">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-5">
                <CheckCircle className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-heading text-2xl sm:text-3xl text-foreground mb-3">
                Thank You!
              </h3>
              <p className="font-body text-muted-foreground text-sm sm:text-base leading-relaxed mb-6">
                Your application has been received. A member of our team will contact you
                within 48 hours. God bless you for your heart to serve!
              </p>
              <button
                onClick={() => { setSubmitted(false); form.reset(); }}
                className="px-8 py-3 bg-accent text-accent-foreground font-body font-bold text-sm rounded-full hover:brightness-110 transition-all shadow-gold"
              >
                Submit Another
              </button>
            </div>
          ) : (
            <div className="bg-card rounded-2xl p-6 sm:p-10 shadow-elevated border border-border">
              {/* Type selector tabs */}
              <div className="flex gap-3 mb-8">
                <button
                  type="button"
                  onClick={() => form.setValue("type", "volunteer")}
                  className={`flex-1 flex items-center justify-center gap-2 py-3 sm:py-4 rounded-xl font-body font-semibold text-sm transition-all duration-300 border-2 ${
                    selectedType === "volunteer"
                      ? "border-accent bg-accent/10 text-accent"
                      : "border-border bg-muted/30 text-muted-foreground hover:border-accent/40"
                  }`}
                >
                  <Users className="w-4 h-4" />
                  Volunteer
                </button>
                <button
                  type="button"
                  onClick={() => form.setValue("type", "partner")}
                  className={`flex-1 flex items-center justify-center gap-2 py-3 sm:py-4 rounded-xl font-body font-semibold text-sm transition-all duration-300 border-2 ${
                    selectedType === "partner"
                      ? "border-accent bg-accent/10 text-accent"
                      : "border-border bg-muted/30 text-muted-foreground hover:border-accent/40"
                  }`}
                >
                  <Handshake className="w-4 h-4" />
                  Partner
                </button>
              </div>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    <FormField
                      control={form.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-body text-sm text-foreground">Full Name *</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="John Adeyemi"
                              className="rounded-xl border-border bg-muted/20 font-body placeholder:text-muted-foreground/50 focus-visible:ring-accent"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-body text-sm text-foreground">Email Address *</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="john@example.com"
                              className="rounded-xl border-border bg-muted/20 font-body placeholder:text-muted-foreground/50 focus-visible:ring-accent"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-body text-sm text-foreground">Phone Number *</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="+234 800 000 0000"
                              className="rounded-xl border-border bg-muted/20 font-body placeholder:text-muted-foreground/50 focus-visible:ring-accent"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    {selectedType === "partner" && (
                      <FormField
                        control={form.control}
                        name="organization"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="font-body text-sm text-foreground">Organization</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Your organization name"
                                className="rounded-xl border-border bg-muted/20 font-body placeholder:text-muted-foreground/50 focus-visible:ring-accent"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    )}
                  </div>

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-body text-sm text-foreground">
                          {selectedType === "partner"
                            ? "How would you like to partner with ACADI? *"
                            : "Why do you want to volunteer with ACADI? *"}
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder={
                              selectedType === "partner"
                                ? "Tell us about your organization and how you'd like to collaborate..."
                                : "Share your motivation, skills, and availability..."
                            }
                            rows={4}
                            className="rounded-xl border-border bg-muted/20 font-body placeholder:text-muted-foreground/50 focus-visible:ring-accent resize-none"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-10 py-3.5 bg-accent text-accent-foreground font-body font-bold text-sm rounded-full hover:brightness-110 transition-all shadow-gold"
                  >
                    Submit Application <Send className="w-4 h-4" />
                  </button>
                </form>
              </Form>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default PartnerVolunteerForm;
