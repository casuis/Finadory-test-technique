import { CheckCircle } from "@phosphor-icons/react";

import {
  Alert,
  AlertDescription,
} from "@/components/ui";

/**
 * Étape d'information affichée
 * pour les utilisateurs ne possédant
 * pas encore d'installation solaire.
 */
export function SolarProjectAlert() {
  return (
    <Alert
      className="
        rounded-xl
        border
        border-slate-200
        bg-slate-100
        px-8
        py-8
      "
    >
      <AlertDescription>
        <div className="flex items-start gap-4">
          {/**
           * Icône validation.
           */}
          <div className="pt-0.5">
            <CheckCircle
              weight="regular"
              className="
                size-7
                text-brand-blue
              "
            />
          </div>

          {/**
           * Contenu texte.
           */}
          <div
            className="
              max-w-[620px]
              space-y-5
            "
          >
            <h3
              className="
                text-xl
                font-semibold
                text-brand-blue
              "
            >
              Excellente nouvelle !
            </h3>

            <div
              className="
                space-y-4
                text-[15px]
                leading-relaxed
                text-black
              "
            >
              <p>
                Nous pouvons vous
                accompagner dans
                un projet solaire
                complet :
              </p>

              <ul
                className="
                  list-disc
                  space-y-2
                  pl-5
                "
              >
                <li>
                  Panneaux photovoltaïques
                </li>

                <li>
                  Batterie de stockage
                  (optionnel)
                </li>

                <li>
                  Solution clé en main
                  avec financement
                </li>
              </ul>

              <p className="italic">
                Poursuivez pour recevoir
                une étude gratuite adaptée
                à votre logement.
              </p>
            </div>
          </div>
        </div>
      </AlertDescription>
    </Alert>
  );
}