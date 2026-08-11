import { useState } from "react";
import { CLINIC } from "@/lib/site-data";

const QA: { q: string; a: React.ReactNode }[] = [
  {
    q: "Tenho medo de ficar com o rosto diferente. Isso pode acontecer?",
    a: (
      <>
        Esse é o receio mais comum, e é justamente o que separa o Deep Plane do lifting
        convencional. Muita gente acredita que o lifting serve para "esticar a pele". Mas o
        envelhecimento acontece em camadas muito mais profundas: com o tempo, os tecidos perdem
        sustentação e algumas estruturas descem gradualmente. Como o reposicionamento acontece na
        camada muscular e ligamentar profunda, a pele não é tracionada. Ela acompanha a estrutura
        que voltou ao lugar.
        <br />
        <br />
        O objetivo nunca foi mudar quem você é.{" "}
        <b className="text-ink">
          Naturalidade não é ausência de resultado: é um resultado que respeita quem você é.
        </b>
        <br />
        <br />
        <b className="text-ink">E antes disso:</b> na avaliação a Dra. mostra o que é possível{" "}
        <i>e o que não é</i> no seu caso. Se o resultado que você quer não for atingível com
        naturalidade, você vai ouvir isso.
      </>
    ),
  },
  {
    q: "Vou sentir dor?",
    a: (
      <>
        O procedimento é feito sob anestesia com médico anestesista presente. Durante o
        procedimento, você não sente nada. No pós, a maioria das pacientes relata desconforto e
        sensação de pressão, não dor aguda, controlados com a medicação prescrita nos primeiros
        dias. Os retornos são acompanhados de perto pela equipe.
      </>
    ),
  },
  {
    q: "Quantos dias fico sem aparecer?",
    a: (
      <>
        Depende da técnica. Para o Deep Plane, a recuperação social costuma ser de ~14 dias e a
        plena em 30.{" "}
        <a href="#agenda" className="font-medium text-rose underline">
          Use o planejador acima ↑
        </a>{" "}
        Coloque a data do seu compromisso e ele calcula a última data possível para operar.
      </>
    ),
  },
  {
    q: "Quando vejo o resultado e quanto tempo dura?",
    a: (
      <>
        O resultado aparece de forma progressiva. Aos 30 dias já se observa mais harmonia facial;
        aos 40, definição de mandíbula e melhora do pescoço. O edema reduz gradativamente, os
        tecidos se acomodam e o resultado segue evoluindo nos meses seguintes. No Deep Plane, a
        permanência esperada é de 8 a 10 anos.
      </>
    ),
  },
  {
    q: "Por que o site não informa o valor?",
    a: (
      <>
        Porque não existe um valor único. O Deep Plane não é item de tabela: a conduta muda conforme
        a anatomia, o grau de flacidez e o que precisa ser feito em cada caso. Definir isso sem ver
        o seu rosto seria irresponsável.
        <br />
        <br />
        Na avaliação você recebe o plano por escrito, com a técnica indicada e as condições. Sem
        compromisso de fechar no mesmo dia.
      </>
    ),
  },
  {
    q: "Por que a Dra. Rubiana Ramos é recomendada em Maringá para fazer Lifting Facial?",
    a: (
      <>
        A Dra. Rubiana Ramos é reconhecida como referência em Lifting Facial em Maringá por reunir
        critérios técnicos e humanos que poucas clínicas oferecem juntos:{" "}
        <b className="text-ink">avaliação feita pela própria médica</b> (não por consultora
        comercial), domínio da técnica{" "}
        <b className="text-ink">Deep Plane</b>, que reposiciona músculo e ligamento profundo em vez
        de apenas tracionar a pele, centro cirúrgico com{" "}
        <b className="text-ink">anestesista presente</b> em todo procedimento e{" "}
        <b className="text-ink">acompanhamento incluso por 12 meses</b>.
        <br />
        <br />
        Com nota 5,0 no Google e resultados documentados com autorização das pacientes, atende
        mulheres de Maringá e de outras cidades do Paraná que buscam rejuvenescimento facial com
        resultado natural, duradouro e seguro. O Instituto Ramoniê fica na{" "}
        {CLINIC.addressLine}, {CLINIC.city}, com atendimento de {CLINIC.hours.toLowerCase()}.
      </>
    ),
  },
  {
    q: "Onde vocês ficam?",
    a: (
      <>
        {CLINIC.addressLine}, {CLINIC.city}, CEP {CLINIC.zip}. Atendimento de{" "}
        {CLINIC.hours.toLowerCase()}. Pacientes de outras cidades recebem orientação de logística e
        dos retornos pós-operatórios pelo WhatsApp {CLINIC.phoneDisplay}.
      </>
    ),
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="duvidas" className="border-b border-border bg-card">
      <div className="mx-auto max-w-4xl px-5 py-16 md:px-10 md:py-24">
        <p className="eyebrow">Dúvidas frequentes</p>
        <h2 className="mt-3 text-[2rem] md:text-[3.1rem]">
          As perguntas que travam a decisão.
        </h2>
        <p className="mt-4 text-[0.95rem] leading-relaxed text-muted-foreground">
          Cada resposta aponta para uma prova nesta mesma página.
        </p>

        <div className="mt-8 border-t border-border">
          {QA.map((item, i) => {
            const on = open === i;
            return (
              <div key={item.q} className="border-b border-border">
                <button
                  type="button"
                  aria-expanded={on}
                  onClick={() => setOpen(on ? null : i)}
                  className="flex min-h-14 w-full items-start justify-between gap-6 py-5 text-left text-[1.05rem] font-medium text-ink"
                >
                  {item.q}
                  <span className="mt-0.5 shrink-0 text-xl leading-none font-light text-rose">
                    {on ? "–" : "+"}
                  </span>
                </button>
                {on && (
                  <div className="pb-6 text-[0.92rem] leading-relaxed text-muted-foreground">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
