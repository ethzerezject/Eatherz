import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "Apa itu bot WhatsApp custom?",
    answer:
      "Bot WhatsApp custom adalah chatbot otomatis yang dibuat khusus sesuai kebutuhan bisnis lo, dari auto-reply, pemesanan, sampai integrasi sistem lain.",
    value: "item-1",
  },
  {
    question: "Berapa lama proses pembuatan bot WhatsApp?",
    answer:
      "Tergantung kompleksitasnya. Biasanya bot standar bisa selesai dalam 3-7 hari kerja, sedangkan yang lebih kompleks bisa memakan waktu lebih lama.",
    value: "item-2",
  },
  {
    question: "Apakah bot bisa digunakan di banyak nomor WhatsApp?",
    answer:
      "Ya! Kami bisa buat bot yang mendukung multi-nomor atau multi-agent supaya tim lo bisa kelola chat lebih efisien.",
    value: "item-3",
  },
  {
    question: "Apakah bot bisa terhubung dengan website atau sistem lain?",
    answer:
      "Tentu! Bot bisa diintegrasikan dengan website, database, CRM, atau sistem lain melalui API.",
    value: "item-4",
  },
  {
    question: "Apakah bot ini legal dan sesuai kebijakan WhatsApp?",
    answer:
      "Kami hanya membuat bot sesuai dengan kebijakan WhatsApp Business API. Untuk penggunaan yang aman, pastikan nomor lo sudah terdaftar secara resmi.",
    value: "item-5",
  },
  {
    question: "Berapa biaya pembuatan bot WhatsApp?",
    answer:
      "Biaya tergantung pada fitur dan kompleksitas bot yang lo butuhin. Untuk info lebih lanjut, silakan hubungi kami di bagian kontak.",
    value: "item-6",
  },
];


export const FAQSection = () => {
  return (
    <section id="faq" className="container md:w-[700px] py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          FAQS
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold">
          Common Questions
        </h2>
      </div>

      <Accordion type="single" collapsible className="AccordionRoot">
        {FAQList.map(({ question, answer, value }) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
