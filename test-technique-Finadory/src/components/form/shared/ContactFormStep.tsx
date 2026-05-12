import { z } from "zod";

import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import {
  Checkbox,
  Input,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui";

/**
 * Schema validation formulaire contact.
 */
const contactFormSchema = z.object({
  firstName: z
    .string()
    .trim()
    .min(1, {
      message: "Prénom requis",
    })
    .min(2, {
      message: "Prénom trop court",
    }),

  lastName: z
    .string()
    .trim()
    .min(1, {
      message: "Champ requis",
    })
    .min(2, {
      message: "Nom trop court",
    }),

  city: z.string().trim().min(1, {
    message: "La ville est obligatoire",
  }),

  postalCode: z.string().trim().min(1, {
    message: "Le code postal est obligatoire",
  }),

  phone: z.string().regex(/^0(?![89])\d{9}$/, {
    message: "Format téléphone invalide (ex: 0612345678)",
  }),

  email: z.string().regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, {
    message: "Format email invalide",
  }),

  privacyAccepted: z.boolean().refine((value) => value === true, {
    message: "Vous devez accepter les CGU",
  }),

  marketingAccepted:
  z.boolean(),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

type ContactFormStepProps = {
  /**
   * Valeurs actuelles formulaire.
   */
  values: ContactFormValues;

  /**
   * Callback changement formulaire.
   */
  onChange: (values: ContactFormValues, isValid: boolean) => void;
};

/**
 * Étape formulaire contact.
 *
 * Utilise :
 * - react-hook-form
 * - zod
 * - composants form shadcn
 */
export function ContactFormStep({ values, onChange }: ContactFormStepProps) {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),

    mode: "onChange",

    defaultValues: values,
  });

  /**
   * Synchronise les données
   * avec le parent.
   */
  function syncForm() {
    const currentValues = form.getValues();

    const isValid = contactFormSchema.safeParse(currentValues).success;

    onChange(currentValues, isValid);
  }

  return (
    <Form {...form}>
      <form className="space-y-5">
        {/**
         * Ligne prénom / nom.
         */}
        <div
          className="
            grid
            grid-cols-1
            gap-4
            md:grid-cols-2
          "
        >
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-slate-500">Prénom *</FormLabel>

                <FormControl>
                  <Input
                    {...field}
                    className="
                      h-12
                      rounded-lg
                    "
                    onChange={(event) => {
                      field.onChange(event);

                      setTimeout(syncForm);
                    }}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-slate-500">Nom *</FormLabel>

                <FormControl>
                  <Input
                    {...field}
                    className="h-12 rounded-lg"
                    onChange={(event) => {
                      field.onChange(event);

                      setTimeout(syncForm);
                    }}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/**
         * Ville.
         */}
        <FormField
          control={form.control}
          name="city"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-slate-500">Ville *</FormLabel>

              <FormControl>
                <Input
                  {...field}
                  className="h-12 rounded-lg"
                  onChange={(event) => {
                    field.onChange(event);

                    setTimeout(syncForm);
                  }}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        {/**
         * Code postal.
         */}
        <FormField
          control={form.control}
          name="postalCode"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-slate-500">Code postal *</FormLabel>

              <FormControl>
                <Input
                  {...field}
                  className="h-12 rounded-lg"
                  onChange={(event) => {
                    const onlyNumbers = event.target.value.replace(/\D/g, "").slice(0, 5);

                    field.onChange(onlyNumbers);

                    setTimeout(syncForm);
                  }}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        {/**
         * Téléphone.
         */}
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-slate-500">Téléphone *</FormLabel>

              <FormControl>
                <Input
                  {...field}
                  inputMode="numeric"
                  maxLength={10}
                  placeholder="0612345678"
                  className="
                    h-12
                    rounded-lg
                  "
                  onChange={(event) => {
                    const onlyNumbers = event.target.value
                      .replace(/\D/g, "")
                      .slice(0, 10);

                    field.onChange(onlyNumbers);

                    setTimeout(syncForm);
                  }}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        {/**
         * Email.
         */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-slate-500">Email *</FormLabel>

              <FormControl>
                <Input
                  {...field}
                  type="email"
                  placeholder="email@exemple.com"
                  className="
                    h-12
                    rounded-lg
                  "
                  onChange={(event) => {
                    field.onChange(event);

                    setTimeout(syncForm);
                  }}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        {/**
         * Consentements.
         */}
        <div className="space-y-4 pt-2">
          <FormField
            control={form.control}
            name="privacyAccepted"
            render={({ field }) => (
              <FormItem>
                <div className="flex items-start gap-3">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={(checked) => {
                        field.onChange(checked === true);

                        setTimeout(syncForm);
                      }}
                      className="
                        mt-1
                        size-5
                        border-brand-blue
                      "
                    />
                  </FormControl>

                  <FormLabel
                    className="
                      cursor-pointer
                      text-sm
                      font-normal
                      leading-relaxed
                      text-slate-600
                    "
                  >
                    J'accepte la politique de confidentialité et les CGU *
                  </FormLabel>
                </div>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="marketingAccepted"
            render={({ field }) => (
              <FormItem>
                <div className="flex items-start gap-3">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={(checked) => {
                        field.onChange(checked === true);

                        setTimeout(syncForm);
                      }}
                      className="
                        mt-1
                        size-5
                        border-brand-blue
                      "
                    />
                  </FormControl>

                  <FormLabel
                    className="
                      cursor-pointer
                      text-sm
                      font-normal
                      leading-relaxed
                      text-slate-600
                    "
                  >
                    J'accepte que mes données personnelles soient utilisées pour
                    assurer le suivi de ma demande, y compris par email et/ou
                    SMS.
                  </FormLabel>
                </div>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </form>
    </Form>
  );
}

/**
 * Validation externe helper.
 */
export function isValidContactForm(values: ContactFormValues) {
  return contactFormSchema.safeParse(values).success;
}
