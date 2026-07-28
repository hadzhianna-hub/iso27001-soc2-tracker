const PLAN = {
 "meta": {
  "title": "ISO 27001 Foundation + SOC 2 + AI Governance",
  "subtitle": "10 тижнів навчання",
  "overview": [
   [
    "Тривалість",
    "10 тижнів (5 трав — 13 лип 2025)"
   ],
   [
    "Навантаження",
    "~1–1.5 год на день, 5–7 днів на тиждень"
   ],
   [
    "Цільові іспити",
    "PECB ISO/IEC 27001:2022 Foundation"
   ],
   [
    "Прохідний бал",
    "70% (рекомендовано готуватись до 75–80%)"
   ],
   [
    "Формат іспиту",
    "Multiple choice, open-book (можна мати роздруківки)"
   ],
   [
    "Паралельна ціль",
    "Участь у SOC 2 проєкті організації"
   ]
  ],
  "phases": [
   [
    "1 — ISO 27001",
    "1–4",
    "Candidate Handbook, клаузи 4–10, Annex A, пробні тести",
    "Здача іспиту Foundation"
   ],
   [
    "2 — SOC 2",
    "5–7",
    "TSC, Common Criteria, Access Controls, участь у проєкті",
    "Роль у SOC 2 підготовці"
   ],
   [
    "3 — GRC + AI",
    "8–10",
    "NIST CSF, EU AI Act, ISO 42001, NIST AI RMF",
    "AI Governance базис"
   ]
  ]
 },
 "tsc": [
  [
   "Security (CC)",
   "ТАК",
   "Захист від несанкціонованого доступу"
  ],
  [
   "Availability",
   "Ні",
   "Система доступна відповідно до угод"
  ],
  [
   "Processing Integrity",
   "Ні",
   "Обробка даних повна, точна, своєчасна"
  ],
  [
   "Confidentiality",
   "Ні",
   "Конфіденційна інформація захищена"
  ],
  [
   "Privacy",
   "Ні",
   "Персональні дані обробляються правильно"
  ]
 ],
 "compare": [
  [
   "",
   "SOC 2",
   "ISO 27001"
  ],
  [
   "Походження",
   "США (AICPA)",
   "Міжнародний (ISO)"
  ],
  [
   "Результат",
   "Звіт аудитора",
   "Сертифікат"
  ],
  [
   "Аудитор",
   "CPA firm",
   "Акредитований орган"
  ],
  [
   "Фокус",
   "Захист даних клієнтів",
   "Система управління ІБ"
  ],
  [
   "Популярність",
   "США, SaaS",
   "Глобально, особливо Європа"
  ]
 ],
 "career": [
  [
   "Зараз",
   "Agile Coach + Jira Admin + IAM досвід (500+ employees)"
  ],
  [
   "Після 10 тижнів",
   "ISO 27001 Foundation ✓ + реальний SOC 2 досвід + AI Governance базис"
  ],
  [
   "Середньостроково",
   "GRC Analyst / AI Governance Officer / Security PM"
  ],
  [
   "Довгостроково",
   "CISA + CRISC + AIGP + EU AI Act compliance"
  ]
 ],
 "tips": {
  "1": "Мета — загальний огляд. Не намагайся запам'ятати всі деталі — спочатку лише структура.",
  "2": "Питання на іспиті: \"що організація SHALL робити згідно клаузи X?\" — фокусуйся на обов'язкових вимогах (shall vs should).",
  "3": "Не треба знати всі 93 контролі напам'ять — важлива логіка: який контроль до якого ризику."
 },
 "keyLinkNote": "Ключовий зв'язок: Твій IAM досвід = CC6 (logical access controls). Це серцевина Security критерію SOC 2.",
 "weeks": [
  {
   "week": "1",
   "dates": "5–11 трав",
   "title": "Структура іспиту + базові концепції",
   "subtitle": "Candidate Handbook, CIA triad, сімейство ISO 27000",
   "days": [
    {
     "day": "Пн–Вт",
     "title": "PECB Candidate Handbook Foundation",
     "subtitle": "Вивчи структуру іспиту, домени, правила складання",
     "links": [
      {
       "label": "Candidate Handbook PDF",
       "url": "pecb.com/pdf/candidate-handbooks/pecb-candidate-handbook-iso-27001-foundation.pdf"
      },
      {
       "label": "Сторінка курсу PECB",
       "url": "pecb.com/en/education-and-certification-for-individuals/iso-iec-27001/iso-iec-27001-foundation"
      }
     ]
    },
    {
     "day": "Ср",
     "title": "CIA triad, ISMS, терміни ISO 27000",
     "subtitle": "Confidentiality / Integrity / Availability — офіційні визначення",
     "links": [
      {
       "label": "ISO 27000 Glossary (офіційно)",
       "url": "iso.org/obp/ui/#iso:std:iso-iec:27000:ed-5:v1:en"
      },
      {
       "label": "YouTube: ISO 27001 intro",
       "url": "youtube.com/results?search_query=ISO+27001+foundation+ISMS+introduction"
      }
     ]
    },
    {
     "day": "Чт",
     "title": "Сімейство ISO 27000 (27001, 27002, 27003, 27005)",
     "subtitle": "Що для чого — логіка зв'язків між стандартами",
     "links": [
      {
       "label": "ISO 27000 family overview",
       "url": "itgovernance.co.uk/iso27001-faqs"
      },
      {
       "label": "ISO.org офіційна сторінка",
       "url": "iso.org/isoiec-27001-information-security.html"
      }
     ]
    },
    {
     "day": "Пт–Сб",
     "title": "Udemy: ISO 27001 for busy learners (2 год)",
     "subtitle": "Перше повне ознайомлення — без зупинок на деталях",
     "links": [
      {
       "label": "Udemy: ISO 27001 for busy learners",
       "url": "udemy.com/course/iso-27001-foundation-by-example/"
      },
      {
       "label": "Udemy: ISO 27001:2022 ISMS (глибокий)",
       "url": "udemy.com/course/isoiec-27001-information-security-management-system/"
      }
     ]
    },
    {
     "day": "Нд",
     "title": "Flashcards + власний конспект",
     "subtitle": "Термін → визначення своїми словами",
     "links": [
      {
       "label": "Quizlet: ISO 27001 flashcards",
       "url": "quizlet.com/search?query=ISO+27001+foundation&type=sets"
      }
     ]
    }
   ]
  },
  {
   "week": "2",
   "dates": "12–18 трав",
   "title": "Клаузи ISO 27001:2022 (4–10)",
   "subtitle": "Контекст, лідерство, планування, підтримка, операції, оцінка, покращення",
   "days": [
    {
     "day": "Пн",
     "title": "Клауза 4 — Context of the organization",
     "subtitle": "Внутрішній/зовнішній контекст, зацікавлені сторони, скоуп ISMS",
     "links": [
      {
       "label": "Advisera: Clause 4",
       "url": "advisera.com/27001academy/iso-27001-clause-4-context-of-the-organization/"
      },
      {
       "label": "YouTube: Clause 4",
       "url": "youtube.com/results?search_query=ISO+27001+clause+4+context+organization"
      }
     ]
    },
    {
     "day": "Вт",
     "title": "Клауза 5 + 6 — Leadership + Planning",
     "subtitle": "Політики, ролі, risk assessment, Statement of Applicability (SoA)",
     "links": [
      {
       "label": "Advisera: Clause 5",
       "url": "advisera.com/27001academy/iso-27001-clause-5-leadership/"
      },
      {
       "label": "Advisera: Clause 6",
       "url": "advisera.com/27001academy/iso-27001-clause-6-planning/"
      },
      {
       "label": "YouTube: SoA explained",
       "url": "youtube.com/results?search_query=ISO+27001+statement+of+applicability"
      }
     ]
    },
    {
     "day": "Ср",
     "title": "Клауза 7 + 8 — Support + Operation",
     "subtitle": "Ресурси, компетенції, комунікація, документація, операційне планування",
     "links": [
      {
       "label": "Advisera: Clause 7",
       "url": "advisera.com/27001academy/iso-27001-clause-7-support/"
      },
      {
       "label": "Advisera: Clause 8",
       "url": "advisera.com/27001academy/iso-27001-clause-8-operation/"
      }
     ]
    },
    {
     "day": "Чт",
     "title": "Клауза 9 + 10 — Performance + Improvement",
     "subtitle": "Моніторинг, внутрішній аудит, management review, коригувальні дії",
     "links": [
      {
       "label": "Advisera: Clause 9",
       "url": "advisera.com/27001academy/iso-27001-clause-9-performance-evaluation/"
      },
      {
       "label": "Advisera: Clause 10",
       "url": "advisera.com/27001academy/iso-27001-clause-10-improvement/"
      }
     ]
    },
    {
     "day": "Пт–Нд",
     "title": "Перший пробний тест",
     "subtitle": "Без підказок. Запиши де помилки — повернешся в тижні 4",
     "links": [
      {
       "label": "ExamSimul: Foundation",
       "url": "examsimul.com/exam-simul/iso-27001/iso-27001-foundation"
      },
      {
       "label": "Udemy: Practice Test",
       "url": "udemy.com/course/iso-27001-foundation-practice-test-p/"
      }
     ]
    }
   ]
  },
  {
   "week": "3",
   "dates": "19–25 трав",
   "title": "Annex A + ризик-менеджмент",
   "subtitle": "93 контролі, 4 категорії, ISO 27002, risk treatment options",
   "days": [
    {
     "day": "Пн",
     "title": "Annex A — структура (2022 vs 2013)",
     "subtitle": "4 категорії: organizational, people, physical, technological",
     "links": [
      {
       "label": "Advisera: Annex A overview",
       "url": "advisera.com/27001academy/iso-27001-annex-a-controls/"
      },
      {
       "label": "ISMS.online: всі контролі",
       "url": "isms.online/iso-27001/annex-a/"
      },
      {
       "label": "YouTube: зміни 2022",
       "url": "youtube.com/results?search_query=ISO+27001+2022+Annex+A+changes"
      }
     ]
    },
    {
     "day": "Вт–Ср",
     "title": "A.5 Organizational + A.6 People controls",
     "subtitle": "Політики, ролі, screening, remote work, термінація",
     "links": [
      {
       "label": "A.5 Organizational controls",
       "url": "isms.online/iso-27001/annex-a/5-organisational-controls/"
      },
      {
       "label": "A.6 People controls",
       "url": "isms.online/iso-27001/annex-a/6-people-controls/"
      }
     ]
    },
    {
     "day": "Чт",
     "title": "A.7 Physical + A.8 Technological controls",
     "subtitle": "Фізична безпека, шифрування, контроль доступу, моніторинг",
     "links": [
      {
       "label": "A.7 Physical controls",
       "url": "isms.online/iso-27001/annex-a/7-physical-controls/"
      },
      {
       "label": "A.8 Technological controls",
       "url": "isms.online/iso-27001/annex-a/8-technological-controls/"
      }
     ]
    },
    {
     "day": "Пт",
     "title": "Risk assessment + risk treatment",
     "subtitle": "Avoid / mitigate / transfer / accept — логіка вибору опцій",
     "links": [
      {
       "label": "Advisera: Risk assessment",
       "url": "advisera.com/27001academy/iso-27001-risk-assessment/"
      },
      {
       "label": "ISMS.online: Risk",
       "url": "isms.online/iso-27001/risk-assessment/"
      },
      {
       "label": "YouTube: Risk treatment",
       "url": "youtube.com/results?search_query=ISO+27001+risk+treatment+options"
      }
     ]
    },
    {
     "day": "Сб–Нд",
     "title": "Другий пробний тест з таймером",
     "subtitle": "Симулюй реальний іспит — без пауз",
     "links": [
      {
       "label": "ExamSimul",
       "url": "examsimul.com/exam-simul/iso-27001/iso-27001-foundation"
      },
      {
       "label": "Udemy Practice Test",
       "url": "udemy.com/course/iso-27001-foundation-practice-test-p/"
      }
     ]
    }
   ]
  },
  {
   "week": "4",
   "dates": "26 трав–1 черв",
   "title": "Фінальне повторення + іспит ISO 27001 Foundation",
   "subtitle": "Слабкі місця, open-book підготовка, здача іспиту",
   "days": [
    {
     "day": "Пн–Вт",
     "title": "Повторення слабких клауз",
     "subtitle": "Тільки теми де були помилки в тестах",
     "links": [
      {
       "label": "Advisera Knowledge Base",
       "url": "advisera.com/27001academy/knowledgebase/"
      },
      {
       "label": "ISMS.online повний гід",
       "url": "isms.online/iso-27001/"
      }
     ]
    },
    {
     "day": "Ср",
     "title": "Підготовка open-book матеріалів",
     "subtitle": "Роздрукуй Handbook + конспект. Зроби власний індекс сторінок",
     "links": [
      {
       "label": "Handbook для друку",
       "url": "pecb.com/pdf/candidate-handbooks/pecb-candidate-handbook-iso-27001-foundation.pdf"
      },
      {
       "label": "Поради open-book PECB",
       "url": "identityunderground.wordpress.com/2024/04/24/note-to-self-pecb-exam-references-preparation-guidance/"
      }
     ]
    },
    {
     "day": "Чт–Пт",
     "title": "Фінальний пробний іспит ×2",
     "subtitle": "Ціль: стабільно 75–80%+",
     "links": [
      {
       "label": "ExamSimul",
       "url": "examsimul.com/exam-simul/iso-27001/iso-27001-foundation"
      },
      {
       "label": "Quizlet flashcards",
       "url": "quizlet.com/search?query=ISO+27001+foundation&type=sets"
      }
     ]
    },
    {
     "day": "Сб",
     "title": "ISO 27000 Glossary — фінальний огляд",
     "subtitle": "Офіційні визначення термінів які часто плутають",
     "links": [
      {
       "label": "ISMS.online Glossary",
       "url": "isms.online/iso-27001/glossary/"
      }
     ]
    },
    {
     "day": "Нд",
     "title": "🎯 ІСПИТ або відпочинок",
     "subtitle": "Перевір деталі іспиту в PECB профілі. Прийди за 30 хв",
     "links": [
      {
       "label": "PECB профіль",
       "url": "pecb.com/en/login"
      }
     ]
    }
   ]
  },
  {
   "week": "5",
   "dates": "2–8 черв",
   "title": "SOC 2 фундамент — що це і як працює",
   "subtitle": "AICPA, Trust Service Criteria, Type I vs Type II",
   "days": [
    {
     "day": "Пн–Вт",
     "title": "SOC 2 overview: AICPA, TSC, Type I vs Type II",
     "subtitle": "Що перевіряє аудитор, чим відрізняється від ISO 27001",
     "links": [
      {
       "label": "Vanta: SOC 2 Complete Guide",
       "url": "vanta.com/resources/soc-2-compliance-guide"
      },
      {
       "label": "Drata: SOC 2 Academy",
       "url": "drata.com/blog/soc-2"
      },
      {
       "label": "YouTube: SOC 2 explained",
       "url": "youtube.com/results?search_query=SOC+2+explained+type+1+type+2"
      }
     ]
    },
    {
     "day": "Ср",
     "title": "5 Trust Service Criteria детально",
     "subtitle": "Security (обов'язковий), Availability, Confidentiality, Processing Integrity, Privacy",
     "links": [
      {
       "label": "AICPA: Trust Services Criteria",
       "url": "aicpa.org/resources/article/trust-services-criteria"
      },
      {
       "label": "Vanta: TSC overview",
       "url": "vanta.com/resources/soc-2-trust-service-criteria"
      }
     ]
    },
    {
     "day": "Чт",
     "title": "Common Criteria (CC) — Security детально",
     "subtitle": "CC6 (access control), CC7 (monitoring), CC8 (change management) — твоя зона",
     "links": [
      {
       "label": "Vanta: Common Criteria",
       "url": "vanta.com/resources/soc-2-common-criteria"
      },
      {
       "label": "Drata: CC explained",
       "url": "drata.com/blog/soc-2-common-criteria"
      }
     ]
    },
    {
     "day": "Пт–Нд",
     "title": "SOC 2 vs ISO 27001 — глибоке порівняння",
     "subtitle": "Що перетинається, що можна перевикористати з ISO 27001",
     "links": [
      {
       "label": "Vanta: SOC 2 vs ISO 27001",
       "url": "vanta.com/resources/soc-2-vs-iso-27001"
      },
      {
       "label": "Udemy: SOC 2 Practical Guide",
       "url": "udemy.com/course/soc-2-compliance-a-practical-guide/"
      }
     ]
    }
   ]
  },
  {
   "week": "6",
   "dates": "9–15 черв",
   "title": "SOC 2 підготовка: процеси та докази",
   "subtitle": "Gap assessment, evidence collection, обов'язкові policies",
   "days": [
    {
     "day": "Пн–Вт",
     "title": "Gap assessment — як це робиться",
     "subtitle": "Що вже є в організації vs що потрібно для SOC 2",
     "links": [
      {
       "label": "Vanta: Gap Analysis",
       "url": "vanta.com/resources/soc-2-gap-analysis"
      },
      {
       "label": "Drata: Readiness Assessment",
       "url": "drata.com/blog/soc-2-readiness-assessment"
      }
     ]
    },
    {
     "day": "Ср",
     "title": "Evidence collection — що збирати і як",
     "subtitle": "Скриншоти, логи, access reviews, policy docs — формати доказів",
     "links": [
      {
       "label": "Vanta: Evidence Collection",
       "url": "vanta.com/resources/soc-2-evidence-collection"
      },
      {
       "label": "Drata: Audit Evidence",
       "url": "drata.com/blog/soc-2-audit-evidence"
      }
     ]
    },
    {
     "day": "Чт",
     "title": "Обов'язкові policies для SOC 2",
     "subtitle": "Information Security Policy, Access Control Policy, Incident Response",
     "links": [
      {
       "label": "Vanta: SOC 2 Policies",
       "url": "vanta.com/resources/soc-2-policies"
      },
      {
       "label": "Drata: Policy templates",
       "url": "drata.com/blog/soc-2-policy-templates"
      }
     ]
    },
    {
     "day": "Пт–Нд",
     "title": "⚡ Пропозиція участі у SOC 2 проєкті",
     "subtitle": "Підготуй і запропонуй свою роль: Access Controls + Jira tracking",
     "links": [
      {
       "label": "Vanta: SOC 2 Project Plan",
       "url": "vanta.com/resources/soc-2-project-plan"
      }
     ]
    }
   ]
  },
  {
   "week": "7",
   "dates": "16–22 черв",
   "title": "Access Controls + Vendor Management",
   "subtitle": "Твоя зона участі у реальному проєкті BetterMe",
   "days": [
    {
     "day": "Пн–Вт",
     "title": "Access Control вимоги SOC 2 (CC6)",
     "subtitle": "Provisioning, deprovisioning, MFA, access reviews — що хоче аудитор",
     "links": [
      {
       "label": "Vanta: Access Control SOC 2",
       "url": "vanta.com/resources/access-control-soc-2"
      },
      {
       "label": "Drata: Logical Access Controls",
       "url": "drata.com/blog/logical-access-controls"
      }
     ]
    },
    {
     "day": "Ср–Чт",
     "title": "Vendor Management для SOC 2",
     "subtitle": "Third-party risk, vendor register, AI tools як vendors",
     "links": [
      {
       "label": "Vanta: Vendor Management",
       "url": "vanta.com/resources/vendor-management-soc-2"
      },
      {
       "label": "Drata: Third-party Risk",
       "url": "drata.com/blog/third-party-risk-management"
      }
     ]
    },
    {
     "day": "Пт–Нд",
     "title": "Jira проєкт для SOC 2 evidence tracking",
     "subtitle": "Epic = TSC criteria → Stories = контролі → Tasks = збір доказів",
     "links": [
      {
       "label": "Vanta: SOC 2 Checklist",
       "url": "vanta.com/resources/soc-2-checklist"
      }
     ]
    }
   ]
  },
  {
   "week": "8",
   "dates": "23–29 черв",
   "title": "GRC основи + CompTIA Security+ baseline",
   "subtitle": "Governance, Risk, Compliance — NIST CSF",
   "days": [
    {
     "day": "Пн–Вт",
     "title": "GRC framework — що це і навіщо",
     "subtitle": "Governance, Risk Management, Compliance — три стовпи",
     "links": [
      {
       "label": "ISACA GRC Glossary",
       "url": "isaca.org/resources/glossary#glossG"
      },
      {
       "label": "YouTube: GRC explained",
       "url": "youtube.com/results?search_query=GRC+governance+risk+compliance+explained"
      }
     ]
    },
    {
     "day": "Ср–Пт",
     "title": "CompTIA Security+ — Governance & Compliance домен",
     "subtitle": "Frameworks, regulations (GDPR, NIS2), compliance monitoring",
     "links": [
      {
       "label": "Professor Messer: Security+ (безкоштовно)",
       "url": "professormesser.com/security-plus/sy0-701/sy0-701-video/sy0-701-course-index/"
      },
      {
       "label": "YouTube: Security+ Governance",
       "url": "youtube.com/results?search_query=CompTIA+Security+plus+governance+compliance"
      }
     ]
    },
    {
     "day": "Сб–Нд",
     "title": "NIST Cybersecurity Framework огляд",
     "subtitle": "Identify / Protect / Detect / Respond / Recover",
     "links": [
      {
       "label": "NIST CSF офіційний сайт",
       "url": "nist.gov/cyberframework"
      },
      {
       "label": "YouTube: NIST CSF",
       "url": "youtube.com/results?search_query=NIST+cybersecurity+framework+explained+2024"
      }
     ]
    }
   ]
  },
  {
   "week": "9",
   "dates": "30 черв–6 лип",
   "title": "AI Governance + AI Security основи",
   "subtitle": "EU AI Act, ISO 42001, NIST AI RMF",
   "days": [
    {
     "day": "Пн–Вт",
     "title": "EU AI Act — структура і ключові вимоги",
     "subtitle": "Risk tiers: unacceptable / high / limited / minimal risk",
     "links": [
      {
       "label": "EU AI Act офіційний текст",
       "url": "artificialintelligenceact.eu/"
      },
      {
       "label": "YouTube: EU AI Act",
       "url": "youtube.com/results?search_query=EU+AI+Act+explained+2024"
      }
     ]
    },
    {
     "day": "Ср",
     "title": "ISO 42001 — AI Management System",
     "subtitle": "Аналог ISO 27001 для AI — структура, вимоги, зв'язок з 27001",
     "links": [
      {
       "label": "ISO 42001 офіційна сторінка",
       "url": "iso.org/standard/81230.html"
      },
      {
       "label": "ISMS.online: ISO 42001 guide",
       "url": "isms.online/iso-42001/"
      }
     ]
    },
    {
     "day": "Чт–Пт",
     "title": "NIST AI RMF (AI Risk Management Framework)",
     "subtitle": "Govern / Map / Measure / Manage",
     "links": [
      {
       "label": "NIST AI RMF офіційний",
       "url": "airc.nist.gov/Home"
      },
      {
       "label": "YouTube: NIST AI RMF",
       "url": "youtube.com/results?search_query=NIST+AI+risk+management+framework"
      }
     ]
    },
    {
     "day": "Сб–Нд",
     "title": "AI vendors у контексті SOC 2 + ISO 27001",
     "subtitle": "Як оцінювати AI tools як third-party risk",
     "links": [
      {
       "label": "Securiti.ai: AI Governance",
       "url": "securiti.ai/resources/ai-governance/"
      }
     ]
    }
   ]
  },
  {
   "week": "10",
   "dates": "7–13 лип",
   "title": "Підсумок + кар'єрне позиціонування",
   "subtitle": "CV, наступні сертифікації, ретроспектива",
   "days": [
    {
     "day": "Пн–Вт",
     "title": "Оновлення CV та LinkedIn",
     "subtitle": "ISO 27001 Foundation, участь у SOC 2, AI Governance базис",
     "links": [
      {
       "label": "LinkedIn Learning: InfoSec",
       "url": "linkedin.com/learning/topics/information-security"
      }
     ]
    },
    {
     "day": "Ср–Чт",
     "title": "Вибір наступної сертифікації",
     "subtitle": "CISA / ISO 27001 Lead Implementer / CompTIA Security+ / ISO 42001",
     "links": [
      {
       "label": "PECB: ISO 27001 Lead Implementer",
       "url": "pecb.com/en/education-and-certification-for-individuals/iso-iec-27001/iso-iec-27001-lead-implementer"
      },
      {
       "label": "ISACA: CISA",
       "url": "isaca.org/credentialing/cisa"
      },
      {
       "label": "PECB: ISO 42001",
       "url": "pecb.com/en/education-and-certification-for-individuals/iso-iec-42001"
      }
     ]
    },
    {
     "day": "Пт–Нд",
     "title": "Ретроспектива 10 тижнів",
     "subtitle": "Що вивчено, що застосовано, що далі",
     "links": []
    }
   ]
  }
 ],
 "checklist": {
  "ISO 27001 Foundation": [
   "Прочитано Candidate Handbook Foundation",
   "Вивчено клаузи 4–10 ISO 27001:2022",
   "Вивчено Annex A (4 категорії, 93 контролі)",
   "Результат 75%+ на пробних тестах",
   "Підготовлено open-book матеріали з індексом",
   "Здано іспит ISO 27001 Foundation"
  ],
  "SOC 2": [
   "Розумію 5 Trust Service Criteria",
   "Знаю різницю Type I vs Type II",
   "Запропоновано участь керівництву",
   "Взято блок Access Controls (CC6)",
   "Налаштовано Jira проєкт для evidence tracking"
  ],
  "GRC + AI Governance": [
   "Ознайомлено з NIST CSF",
   "Прочитано EU AI Act основи",
   "Ознайомлено з ISO 42001",
   "Вивчено NIST AI RMF"
  ],
  "Кар'єра": [
   "CV оновлено з новими компетенціями",
   "Обрано наступну сертифікацію"
  ]
 }
};
