// 설문 질문 데이터
const questions = [
    {
        question: "나는 내 생각과 아이디어를 명확하게 표현할 수 있다.",
        options: [
            { text: "항상 명확하게 표현한다", score: 4 },
            { text: "대부분 명확하게 표현한다", score: 3 },
            { text: "가끔 어려움을 느낀다", score: 2 },
            { text: "자주 표현에 어려움을 겪는다", score: 1 }
        ]
    },
    {
        question: "나는 상대방의 의견을 주의 깊게 듣고 이해하려고 노력한다.",
        options: [
            { text: "항상 집중해서 경청한다", score: 4 },
            { text: "대체로 경청하는 편이다", score: 3 },
            { text: "때때로 집중하지 못한다", score: 2 },
            { text: "상대 의견보다 내 의견을 우선한다", score: 1 }
        ]
    },
    {
        question: "나는 대화 중에 적절한 질문을 통해 대화를 발전시킬 수 있다.",
        options: [
            { text: "항상 적절한 질문으로 대화를 이끈다", score: 4 },
            { text: "자주 좋은 질문을 한다", score: 3 },
            { text: "가끔 질문을 하는 편이다", score: 2 },
            { text: "거의 질문하지 않는다", score: 1 }
        ]
    },
    {
        question: "나는 비언어적 표현(표정, 제스처)을 효과적으로 사용한다.",
        options: [
            { text: "표정과 제스처를 매우 효과적으로 활용한다", score: 4 },
            { text: "적절한 비언어적 표현을 사용한다", score: 3 },
            { text: "표정이나 제스처가 부자연스럽다", score: 2 },
            { text: "비언어적 표현을 거의 사용하지 않는다", score: 1 }
        ]
    },
    {
        question: "나는 상대방의 감정과 관점을 존중하며 대화한다.",
        options: [
            { text: "항상 상대의 입장을 배려한다", score: 4 },
            { text: "대체로 상대 감정을 고려한다", score: 3 },
            { text: "때때로 상대 감정을 고려하지 못한다", score: 2 },
            { text: "주로 내 관점에서만 말한다", score: 1 }
        ]
    },
    {
        question: "나는 갈등 상황에서도 효과적으로 의사소통할 수 있다.",
        options: [
            { text: "갈등 상황에서도 침착하게 소통한다", score: 4 },
            { text: "대체로 갈등을 적절히 관리한다", score: 3 },
            { text: "갈등 상황에서 감정 조절이 어렵다", score: 2 },
            { text: "갈등 상황을 회피하는 편이다", score: 1 }
        ]
    },
    {
        question: "나는 복잡한 정보를 상대방이 이해하기 쉽게 전달할 수 있다.",
        options: [
            { text: "항상 쉽고 명확하게 전달한다", score: 4 },
            { text: "대체로 이해하기 쉽게 설명한다", score: 3 },
            { text: "복잡한 내용 전달에 어려움을 느낀다", score: 2 },
            { text: "전문 용어를 많이 사용해 소통이 어렵다", score: 1 }
        ]
    },
    {
        question: "나는 다양한 상황과 대상에 맞게 의사소통 방식을 조절할 수 있다.",
        options: [
            { text: "상황과 대상에 완벽히 맞춰 소통한다", score: 4 },
            { text: "대체로 상황에 맞게 조절한다", score: 3 },
            { text: "특정 대상과만 잘 소통한다", score: 2 },
            { text: "한 가지 방식으로만 소통한다", score: 1 }
        ]
    },
    {
        question: "나는 피드백을 긍정적으로 받아들이고 개선에 활용한다.",
        options: [
            { text: "항상 피드백을 환영하고 적극 반영한다", score: 4 },
            { text: "대체로 피드백을 수용한다", score: 3 },
            { text: "때때로 피드백에 방어적이 된다", score: 2 },
            { text: "피드백을 부정적으로 받아들인다", score: 1 }
        ]
    },
    {
        question: "나는 프레젠테이션이나 공개 발표 상황에서 자신있게 말할 수 있다.",
        options: [
            { text: "발표 상황에서 매우 자신감 있다", score: 4 },
            { text: "대체로 발표를 잘 수행한다", score: 3 },
            { text: "발표 시 긴장하고 불안해한다", score: 2 },
            { text: "가능하면 발표를 피한다", score: 1 }
        ]
    }
];

// 영어 질문 데이터
const questionsEN = [
    {
        question: "I can express my thoughts and ideas clearly.",
        options: [
            { text: "I always express myself clearly", score: 4 },
            { text: "I mostly express myself clearly", score: 3 },
            { text: "I sometimes find it difficult", score: 2 },
            { text: "I often struggle to express myself", score: 1 }
        ]
    },
    {
        question: "I listen attentively to others' opinions and try to understand them.",
        options: [
            { text: "I always listen attentively", score: 4 },
            { text: "I mostly listen attentively", score: 3 },
            { text: "I sometimes find it difficult to listen", score: 2 },
            { text: "I rarely listen to others' opinions", score: 1 }
        ]
    },
    {
        question: "I can ask appropriate questions to develop a conversation.",
        options: [
            { text: "I always ask appropriate questions to lead the conversation", score: 4 },
            { text: "I often ask good questions", score: 3 },
            { text: "I sometimes ask questions", score: 2 },
            { text: "I rarely ask questions", score: 1 }
        ]
    },
    {
        question: "I use nonverbal expressions (facial expressions, gestures) effectively.",
        options: [
            { text: "I use facial expressions and gestures very effectively", score: 4 },
            { text: "I use appropriate nonverbal expressions", score: 3 },
            { text: "My facial expressions or gestures are unnatural", score: 2 },
            { text: "I hardly use nonverbal expressions", score: 1 }
        ]
    },
    {
        question: "I communicate respectfully and empathetically with others.",
        options: [
            { text: "I always consider others' perspectives", score: 4 },
            { text: "I mostly consider others' feelings", score: 3 },
            { text: "I sometimes don't consider others' feelings", score: 2 },
            { text: "I mostly talk from my perspective", score: 1 }
        ]
    },
    {
        question: "I can communicate effectively in conflict situations.",
        options: [
            { text: "I communicate effectively in conflict situations", score: 4 },
            { text: "I mostly manage conflicts appropriately", score: 3 },
            { text: "It's difficult for me to control my emotions in conflict situations", score: 2 },
            { text: "I tend to avoid conflict", score: 1 }
        ]
    },
    {
        question: "I can convey complex information to others in a way they can understand easily.",
        options: [
            { text: "I always convey information clearly and easily", score: 4 },
            { text: "I mostly explain in a way others can understand", score: 3 },
            { text: "I sometimes find it difficult to convey complex information", score: 2 },
            { text: "I use too many specialized terms, making communication difficult", score: 1 }
        ]
    },
    {
        question: "I can adjust my communication style to suit various situations and people.",
        options: [
            { text: "I communicate perfectly with various situations and people", score: 4 },
            { text: "I mostly adjust to situations", score: 3 },
            { text: "I communicate well only with specific people", score: 2 },
            { text: "I communicate only in one way", score: 1 }
        ]
    },
    {
        question: "I welcome and use feedback positively to improve.",
        options: [
            { text: "I always welcome and reflect feedback positively", score: 4 },
            { text: "I mostly accept feedback", score: 3 },
            { text: "I sometimes become defensive in response to feedback", score: 2 },
            { text: "I reject feedback negatively", score: 1 }
        ]
    },
    {
        question: "I can speak confidently in presentation or public speaking situations.",
        options: [
            { text: "I have very high confidence in presentation situations", score: 4 },
            { text: "I mostly perform well in presentations", score: 3 },
            { text: "I get nervous and anxious in presentations", score: 2 },
            { text: "I try to avoid presentations if possible", score: 1 }
        ]
    }
];

// 스페인어 질문 데이터
const questionsES = [
    {
        question: "Puedo expresar mis pensamientos e ideas con claridad.",
        options: [
            { text: "Siempre me expreso con claridad", score: 4 },
            { text: "La mayoría de las veces me expreso con claridad", score: 3 },
            { text: "A veces me resulta difícil", score: 2 },
            { text: "A menudo tengo dificultades para expresarme", score: 1 }
        ]
    },
    {
        question: "Escucho atentamente las opiniones de los demás y trato de entenderlas.",
        options: [
            { text: "Siempre escucho atentamente", score: 4 },
            { text: "La mayoría de las veces escucho atentamente", score: 3 },
            { text: "A veces es difícil escuchar", score: 2 },
            { text: "Rara vez escucho las opiniones de los demás", score: 1 }
        ]
    },
    {
        question: "Puedo hacer preguntas apropiadas para desarrollar una conversación.",
        options: [
            { text: "Siempre hago preguntas apropiadas para dirigir la conversación", score: 4 },
            { text: "A menudo hago buenas preguntas", score: 3 },
            { text: "A veces hago preguntas", score: 2 },
            { text: "Rara vez hago preguntas", score: 1 }
        ]
    },
    {
        question: "Uso expresiones no verbales (expresiones faciales, gestos) de manera efectiva.",
        options: [
            { text: "Uso expresiones faciales y gestos muy efectivamente", score: 4 },
            { text: "Uso expresiones no verbales apropiadas", score: 3 },
            { text: "Mis expresiones faciales o gestos son poco naturales", score: 2 },
            { text: "Rara vez uso expresiones no verbales", score: 1 }
        ]
    },
    {
        question: "Me comunico respetuosamente y con empatía con los demás.",
        options: [
            { text: "Siempre considero las perspectivas de los demás", score: 4 },
            { text: "La mayoría de las veces considero los sentimientos de los demás", score: 3 },
            { text: "A veces no considero los sentimientos de los demás", score: 2 },
            { text: "La mayoría de las veces hablo desde mi perspectiva", score: 1 }
        ]
    },
    {
        question: "Puedo comunicarme efectivamente en situaciones de conflicto.",
        options: [
            { text: "Me comunico efectivamente en situaciones de conflicto", score: 4 },
            { text: "La mayoría de las veces manejo los conflictos apropiadamente", score: 3 },
            { text: "Es difícil para mí controlar mis emociones en situaciones de conflicto", score: 2 },
            { text: "Tiendo a evitar los conflictos", score: 1 }
        ]
    },
    {
        question: "Puedo transmitir información compleja a otros de manera que puedan entenderla fácilmente.",
        options: [
            { text: "Siempre transmito información clara y fácilmente", score: 4 },
            { text: "La mayoría de las veces explico de manera que otros puedan entender", score: 3 },
            { text: "A veces me resulta difícil transmitir información compleja", score: 2 },
            { text: "Uso demasiados términos especializados, dificultando la comunicación", score: 1 }
        ]
    },
    {
        question: "Puedo ajustar mi estilo de comunicación para adaptarme a diversas situaciones y personas.",
        options: [
            { text: "Me comunico perfectamente en diversas situaciones y con diversas personas", score: 4 },
            { text: "La mayoría de las veces me adapto a las situaciones", score: 3 },
            { text: "Me comunico bien solo con personas específicas", score: 2 },
            { text: "Me comunico solo de una manera", score: 1 }
        ]
    },
    {
        question: "Recibo y utilizo los comentarios de forma positiva para mejorar.",
        options: [
            { text: "Siempre recibo y reflexiono sobre los comentarios positivamente", score: 4 },
            { text: "La mayoría de las veces acepto los comentarios", score: 3 },
            { text: "A veces me pongo a la defensiva ante los comentarios", score: 2 },
            { text: "Rechazo los comentarios negativamente", score: 1 }
        ]
    },
    {
        question: "Puedo hablar con confianza en situaciones de presentación o hablar en público.",
        options: [
            { text: "Tengo mucha confianza en situaciones de presentación", score: 4 },
            { text: "La mayoría de las veces me desempeño bien en presentaciones", score: 3 },
            { text: "Me pongo nervioso y ansioso en presentaciones", score: 2 },
            { text: "Trato de evitar presentaciones si es posible", score: 1 }
        ]
    }
];

// 한국어 결과 메시지 데이터
const resultMessages = [
    {
        minScore: 10,
        maxScore: 20,
        message: "초보 수준: 의사소통 능력을 개선할 필요가 있습니다. 적극적인 경청과 명확한 표현을 연습하고, 피드백을 구하여 지속적으로 커뮤니케이션 스타일을 개선하세요.",
        detailedAnalysis: "현재는 기본적인 의사소통에 어려움을 느끼는 단계입니다. 생각을 명확하게 표현하는 방법, 적극적 경청 기술, 비언어적 커뮤니케이션 방법 등 기본적인 의사소통 기술을 학습하면 크게 향상될 수 있습니다.",
        strengths: [
            "일상적인 대화에 참여 가능",
            "기본적인 의사 표현 능력 보유"
        ],
        weaknesses: [
            "명확한 의사 표현에 어려움",
            "적극적인 경청 기술 부족",
            "복잡한 주제에 대한 의사소통 제한적",
            "갈등 상황에서의 의사소통 어려움"
        ],
        recommendations: [
            { title: "효과적인 의사소통의 기초", type: "온라인 강좌", link: "https://www.coursera.org/learn/effective-communication-basics" },
            { title: "말하기와 경청의 기술", type: "도서", link: "https://www.yes24.com/Product/Goods/12345678" },
            { title: "하루 10분 의사소통 기술 향상", type: "유튜브 채널", link: "https://www.youtube.com/channel/communication-skills" }
        ],
        careerPaths: [
            "일반 사무직",
            "고객 서비스 지원",
            "행정 지원"
        ]
    },
    {
        minScore: 21,
        maxScore: 30,
        message: "기초 수준: 기본적인 의사소통 능력을 갖추고 있습니다. 감정적 지식과 공감 능력을 발전시키고, 다양한 상황에서 의사소통 전략을 연습해보세요.",
        detailedAnalysis: "기본적인 의사소통 능력을 갖추고 있으나 특히 복잡하거나 감정적인 상황에서 개선이 필요합니다. 상대방의 감정을 이해하고 공감하는 능력, 다양한 상황에 맞는 의사소통 방식, 설득력 있는 메시지 전달 방법 등을 학습하면 더 효과적인 의사소통이 가능할 것입니다.",
        strengths: [
            "명확한 아이디어 전달 가능",
            "기본적인 경청 능력 보유",
            "일상적인 대화 상황에서 효과적 소통"
        ],
        weaknesses: [
            "복잡한 주제나 갈등 상황에서 의사소통 어려움",
            "다양한 청중에 맞춘 의사소통 스타일 조정 부족",
            "비언어적 커뮤니케이션 활용 제한적"
        ],
        recommendations: [
            { title: "효과적인 비즈니스 의사소통", type: "온라인 강좌", link: "https://www.edx.org/course/effective-business-communication" },
            { title: "감정 지능과 의사소통", type: "도서", link: "https://www.yes24.com/Product/Goods/87654321" },
            { title: "설득력 있는 프레젠테이션 기법", type: "유튜브 채널", link: "https://www.youtube.com/channel/presentation-skills" }
        ],
        careerPaths: [
            "영업 지원",
            "고객 서비스 담당자",
            "팀 구성원",
            "행정 전문가"
        ]
    },
    {
        minScore: 31,
        maxScore: 35,
        message: "중급 수준: 우수한 의사소통 능력을 갖추고 있습니다. 협상 기술과 복잡한 상황에서의 갈등 해결 능력을 더욱 발전시키세요.",
        detailedAnalysis: "우수한 의사소통 능력을 갖추고 있으며 다양한 상황에서 효과적으로 소통할 수 있습니다. 복잡한 협상, 갈등 중재, 팀 의견 조율, 설득력 있는 프레젠테이션 등 고급 커뮤니케이션 기술을 발전시키면 더욱 효과적인 리더와 소통가가 될 수 있습니다.",
        strengths: [
            "명확하고 효과적인 메시지 전달 능력",
            "적극적 경청과 공감 능력",
            "다양한 상황에 맞는 의사소통 스타일 조정",
            "비언어적 커뮤니케이션 효과적 활용"
        ],
        weaknesses: [
            "고도의 갈등 상황에서 감정 관리 개선 필요",
            "복잡한 협상 상황에서의 전략적 의사소통 강화 필요",
            "다양한 문화적 배경의 사람들과 소통 경험 확장 필요"
        ],
        recommendations: [
            { title: "갈등 해결과 협상 전략", type: "온라인 강좌", link: "https://www.coursera.org/learn/negotiation-and-conflict-resolution" },
            { title: "영향력 있는 소통의 기술", type: "도서", link: "https://www.yes24.com/Product/Goods/24681357" },
            { title: "전략적 커뮤니케이션 마스터하기", type: "유튜브 채널", link: "https://www.youtube.com/channel/strategic-communication" }
        ],
        careerPaths: [
            "팀 리더",
            "프로젝트 매니저",
            "영업 전문가",
            "고객 관계 관리자"
        ]
    },
    {
        minScore: 36,
        maxScore: 40,
        message: "고급 수준: 탁월한 의사소통 능력을 갖추고 있습니다. 다른 사람들의 의사소통 능력 향상을 돕고, 서로 다른 그룹 간의 소통을 위한 중재자 역할을 해보세요.",
        detailedAnalysis: "탁월한 의사소통 능력을 갖추고 있으며 복잡한 상황에서도 효과적으로 소통할 수 있습니다. 이제는 다른 사람들의 의사소통 능력을 코칭하고, 팀이나 조직 내 의사소통 문화를 개선하며, 다양한 이해관계자 간의 관계를 중재하는 역할로 발전할 수 있습니다.",
        strengths: [
            "모든 상황에서 명확하고 설득력 있는 소통 능력",
            "뛰어난 경청 및 공감 능력",
            "효과적인 피드백 제공 능력",
            "갈등 상황에서 감정 관리와 해결 능력",
            "다양한 청중에 맞춘 메시지 전달 능력"
        ],
        weaknesses: [
            "소통 스타일의 지나친 적응으로 인한 본인의 진정성 유지 균형 필요",
            "다른 사람의 의사소통 역량 개발을 돕는 코칭 기술 향상 필요",
            "복잡한 조직 환경에서의 전략적 의사소통 경험 확장 필요"
        ],
        recommendations: [
            { title: "의사소통 코칭과 리더십", type: "온라인 강좌", link: "https://www.edx.org/course/communication-coaching-and-leadership" },
            { title: "조직 내 효과적인 의사소통 전략", type: "도서", link: "https://www.yes24.com/Product/Goods/13579246" },
            { title: "고급 설득 및 영향력 전략", type: "유튜브 채널", link: "https://www.youtube.com/channel/advanced-persuasion" }
        ],
        careerPaths: [
            "소통 전문가/컨설턴트",
            "리더십 코치",
            "중간 관리자/임원",
            "변화 관리 전문가"
        ]
    }
];

// 영어 결과 메시지 데이터
const resultMessagesEN = [
    {
        minScore: 10,
        maxScore: 20,
        message: "Beginner Level: You need to improve your communication skills. Practice active listening and clear expression, seek feedback, and continuously improve your communication style.",
        detailedAnalysis: "You are at a stage where you experience difficulties with basic communication. Learning how to express thoughts clearly, active listening techniques, and nonverbal communication methods will greatly enhance your communication skills.",
        strengths: [
            "Able to participate in everyday conversations",
            "Basic ability to express ideas"
        ],
        weaknesses: [
            "Difficulty in clear expression",
            "Lack of active listening skills",
            "Limited communication on complex topics",
            "Difficulty communicating in conflict situations"
        ],
        recommendations: [
            { title: "Basics of Effective Communication", type: "Online Course", link: "https://www.coursera.org/learn/effective-communication-basics" },
            { title: "The Art of Speaking and Listening", type: "Book", link: "https://www.amazon.com/dp/1234567890" },
            { title: "10 Minutes a Day to Improve Communication Skills", type: "YouTube Channel", link: "https://www.youtube.com/channel/communication-skills" }
        ],
        careerPaths: [
            "General Office Worker",
            "Customer Service Support",
            "Administrative Support"
        ]
    },
    {
        minScore: 21,
        maxScore: 30,
        message: "Basic Level: You have basic communication skills. Develop your emotional knowledge and empathy, and practice communication strategies in various situations.",
        detailedAnalysis: "You have basic communication skills but need improvement especially in complex or emotional situations. Learning to understand and empathize with others' feelings, adapting communication styles to different situations, and delivering persuasive messages will enable more effective communication.",
        strengths: [
            "Ability to convey clear ideas",
            "Basic listening skills",
            "Effective communication in everyday situations"
        ],
        weaknesses: [
            "Difficulty communicating in complex topics or conflict situations",
            "Limited ability to adjust communication style to diverse audiences",
            "Limited use of nonverbal communication"
        ],
        recommendations: [
            { title: "Effective Business Communication", type: "Online Course", link: "https://www.edx.org/course/effective-business-communication" },
            { title: "Emotional Intelligence and Communication", type: "Book", link: "https://www.amazon.com/dp/0987654321" },
            { title: "Persuasive Presentation Techniques", type: "YouTube Channel", link: "https://www.youtube.com/channel/presentation-skills" }
        ],
        careerPaths: [
            "Sales Support",
            "Customer Service Representative",
            "Team Member",
            "Administrative Specialist"
        ]
    },
    {
        minScore: 31,
        maxScore: 35,
        message: "Intermediate Level: You have good communication skills. Develop negotiation techniques and conflict resolution skills in complex situations.",
        detailedAnalysis: "You have good communication skills and can communicate effectively in various situations. Developing advanced skills in complex negotiations, conflict mediation, team opinion coordination, and persuasive presentations will make you an even more effective leader and communicator.",
        strengths: [
            "Clear and effective message delivery",
            "Active listening and empathy skills",
            "Ability to adjust communication style to different situations",
            "Effective use of nonverbal communication"
        ],
        weaknesses: [
            "Need to improve emotional management in high-conflict situations",
            "Need to strengthen strategic communication in complex negotiation scenarios",
            "Need to expand experience with people from diverse cultural backgrounds"
        ],
        recommendations: [
            { title: "Conflict Resolution and Negotiation Strategies", type: "Online Course", link: "https://www.coursera.org/learn/negotiation-and-conflict-resolution" },
            { title: "The Art of Influential Communication", type: "Book", link: "https://www.amazon.com/dp/1357924680" },
            { title: "Mastering Strategic Communication", type: "YouTube Channel", link: "https://www.youtube.com/channel/strategic-communication" }
        ],
        careerPaths: [
            "Team Leader",
            "Project Manager",
            "Sales Professional",
            "Customer Relationship Manager"
        ]
    },
    {
        minScore: 36,
        maxScore: 40,
        message: "Advanced Level: You have excellent communication skills. Help others improve their communication abilities and act as a mediator to promote communication between different groups.",
        detailedAnalysis: "You have excellent communication skills and can communicate effectively even in complex situations. You can now develop into roles that coach others in communication skills, improve communication culture within teams or organizations, and mediate relationships between diverse stakeholders.",
        strengths: [
            "Clear and persuasive communication in all situations",
            "Excellent listening and empathy skills",
            "Effective feedback provision",
            "Emotional management and resolution in conflict situations",
            "Tailored message delivery to diverse audiences"
        ],
        weaknesses: [
            "Need to balance authenticity with adaptive communication styles",
            "Need to improve coaching skills to help develop others' communication capabilities",
            "Need to expand experience in strategic communication in complex organizational environments"
        ],
        recommendations: [
            { title: "Communication Coaching and Leadership", type: "Online Course", link: "https://www.edx.org/course/communication-coaching-and-leadership" },
            { title: "Effective Communication Strategies in Organizations", type: "Book", link: "https://www.amazon.com/dp/2468013579" },
            { title: "Advanced Persuasion and Influence Strategies", type: "YouTube Channel", link: "https://www.youtube.com/channel/advanced-persuasion" }
        ],
        careerPaths: [
            "Communication Specialist/Consultant",
            "Leadership Coach",
            "Middle Manager/Executive",
            "Change Management Expert"
        ]
    }
];

// 스페인어 결과 메시지 데이터
const resultMessagesES = [
    {
        minScore: 10,
        maxScore: 20,
        message: "Nivel Principiante: Necesitas mejorar tus habilidades de comunicación. Practica la escucha activa y la expresión clara, busca retroalimentación y mejora continuamente tu estilo de comunicación.",
        detailedAnalysis: "Estás en una etapa en la que experimentas dificultades con la comunicación básica. Aprender a expresar pensamientos con claridad, técnicas de escucha activa y métodos de comunicación no verbal mejorará enormemente tus habilidades de comunicación.",
        strengths: [
            "Capaz de participar en conversaciones cotidianas",
            "Capacidad básica para expresar ideas"
        ],
        weaknesses: [
            "Dificultad en la expresión clara",
            "Falta de habilidades de escucha activa",
            "Comunicación limitada en temas complejos",
            "Dificultad para comunicarse en situaciones de conflicto"
        ],
        recommendations: [
            { title: "Fundamentos de la Comunicación Efectiva", type: "Curso en línea", link: "https://www.coursera.org/learn/effective-communication-basics" },
            { title: "El Arte de Hablar y Escuchar", type: "Libro", link: "https://www.amazon.es/dp/1234567890" },
            { title: "10 Minutos al Día para Mejorar Habilidades de Comunicación", type: "Canal de YouTube", link: "https://www.youtube.com/channel/communication-skills" }
        ],
        careerPaths: [
            "Trabajador de Oficina General",
            "Soporte de Servicio al Cliente",
            "Soporte Administrativo"
        ]
    },
    {
        minScore: 21,
        maxScore: 30,
        message: "Nivel Básico: Tienes habilidades básicas de comunicación. Desarrolla tu conocimiento y empatía emocional, y practica estrategias de comunicación en diversas situaciones.",
        detailedAnalysis: "Tienes habilidades básicas de comunicación pero necesitas mejorar especialmente en situaciones complejas o emocionales. Aprender a comprender y empatizar con los sentimientos de los demás, adaptar estilos de comunicación a diferentes situaciones y entregar mensajes persuasivos te permitirá una comunicación más efectiva.",
        strengths: [
            "Capacidad para transmitir ideas claras",
            "Habilidades básicas de escucha",
            "Comunicación efectiva en situaciones cotidianas"
        ],
        weaknesses: [
            "Dificultad para comunicarse en temas complejos o situaciones de conflicto",
            "Capacidad limitada para ajustar el estilo de comunicación a diversas audiencias",
            "Uso limitado de comunicación no verbal"
        ],
        recommendations: [
            { title: "Comunicación Empresarial Efectiva", type: "Curso en línea", link: "https://www.edx.org/course/effective-business-communication" },
            { title: "Inteligencia Emocional y Comunicación", type: "Libro", link: "https://www.amazon.es/dp/0987654321" },
            { title: "Técnicas de Presentación Persuasivas", type: "Canal de YouTube", link: "https://www.youtube.com/channel/presentation-skills" }
        ],
        careerPaths: [
            "Soporte de Ventas",
            "Representante de Servicio al Cliente",
            "Miembro de Equipo",
            "Especialista Administrativo"
        ]
    },
    {
        minScore: 31,
        maxScore: 35,
        message: "Nivel Intermedio: Tienes buenas habilidades de comunicación. Desarrolla técnicas de negociación y habilidades de resolución de conflictos en situaciones complejas.",
        detailedAnalysis: "Tienes buenas habilidades de comunicación y puedes comunicarte eficazmente en diversas situaciones. Desarrollar habilidades avanzadas en negociaciones complejas, mediación de conflictos, coordinación de opiniones de equipo y presentaciones persuasivas te convertirá en un líder y comunicador aún más efectivo.",
        strengths: [
            "Entrega de mensajes clara y efectiva",
            "Habilidades de escucha activa y empatía",
            "Capacidad para ajustar el estilo de comunicación a diferentes situaciones",
            "Uso efectivo de la comunicación no verbal"
        ],
        weaknesses: [
            "Necesidad de mejorar la gestión emocional en situaciones de alto conflicto",
            "Necesidad de fortalecer la comunicación estratégica en escenarios de negociación complejos",
            "Necesidad de ampliar la experiencia con personas de diversos orígenes culturales"
        ],
        recommendations: [
            { title: "Resolución de Conflictos y Estrategias de Negociación", type: "Curso en línea", link: "https://www.coursera.org/learn/negotiation-and-conflict-resolution" },
            { title: "El Arte de la Comunicación Influyente", type: "Libro", link: "https://www.amazon.es/dp/1357924680" },
            { title: "Dominando la Comunicación Estratégica", type: "Canal de YouTube", link: "https://www.youtube.com/channel/strategic-communication" }
        ],
        careerPaths: [
            "Líder de Equipo",
            "Gerente de Proyecto",
            "Profesional de Ventas",
            "Gerente de Relaciones con Clientes"
        ]
    },
    {
        minScore: 36,
        maxScore: 40,
        message: "Nivel Avanzado: Tienes excelentes habilidades de comunicación. Ayuda a otros a mejorar sus habilidades de comunicación y actúa como mediador para promover la comunicación entre diferentes grupos.",
        detailedAnalysis: "Tienes excelentes habilidades de comunicación y puedes comunicarte eficazmente incluso en situaciones complejas. Ahora puedes desarrollarte en roles que entrenen a otros en habilidades de comunicación, mejoren la cultura de comunicación dentro de equipos u organizaciones, y medien relaciones entre diversas partes interesadas.",
        strengths: [
            "Comunicación clara y persuasiva en todas las situaciones",
            "Excelentes habilidades de escucha y empatía",
            "Provisión efectiva de retroalimentación",
            "Gestión emocional y resolución en situaciones de conflicto",
            "Entrega de mensajes adaptada a audiencias diversas"
        ],
        weaknesses: [
            "Need to balance authenticity with adaptive communication styles",
            "Need to improve coaching skills to help develop others' communication capabilities",
            "Need to expand experience in strategic communication in complex organizational environments"
        ],
        recommendations: [
            { title: "Coaching de Comunicación y Liderazgo", type: "Online Course", link: "https://www.edx.org/course/communication-coaching-and-leadership" },
            { title: "Estrategias de Comunicación Efectiva en Organizaciones", type: "Libro", link: "https://www.amazon.es/dp/2468013579" },
            { title: "Estrategias Avanzadas de Persuasión e Influencia", type: "Canal de YouTube", link: "https://www.youtube.com/channel/advanced-persuasion" }
        ],
        careerPaths: [
            "Especialista/Consultor de Comunicación",
            "Coach de Liderazgo",
            "Gerente Medio/Ejecutivo",
            "Experto en Gestión del Cambio"
        ]
    }
];

// 현재 활성화된 언어 데이터
let activeQuestions = questions;
let activeResultMessages = resultMessages;

// 전역 변수
let currentQuestionIndex = 0;
let answers = [];

// DOM 요소
const questionContainer = document.getElementById('question-container');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const submitBtn = document.getElementById('submit-btn');
const surveyContainer = document.getElementById('survey');
const resultContainer = document.getElementById('result');
const scoreDisplay = document.getElementById('score-display');
const resultMessageElement = document.getElementById('result-message');
const restartBtn = document.getElementById('restart-btn');
const backToMainBtn = document.getElementById('back-to-main-btn');

// 초기화
function init() {
    // 언어 설정 확인
    checkLanguage();
    
    currentQuestionIndex = 0;
    answers = new Array(activeQuestions.length).fill(null);
    showQuestion(currentQuestionIndex);
    surveyContainer.style.display = 'block';
    resultContainer.style.display = 'none';
}

// 언어 설정 확인 및 적용
function checkLanguage() {
    // URL 파라미터에서 언어 정보 가져오기
    const urlParams = new URLSearchParams(window.location.search);
    const urlLang = urlParams.get('lang');
    
    // localStorage에 저장된 언어 정보 확인
    let savedLanguage = localStorage.getItem('selectedLanguage');
    
    // URL 파라미터에 언어 정보가 있으면 우선 사용하고 localStorage에 저장
    if (urlLang) {
        localStorage.setItem('selectedLanguage', urlLang);
        savedLanguage = urlLang;
    }
    
    if (savedLanguage === 'en') {
        activeQuestions = questionsEN;
        activeResultMessages = resultMessagesEN;
    } else if (savedLanguage === 'es') {
        activeQuestions = questionsES;
        activeResultMessages = resultMessagesES;
    } else {
        activeQuestions = questions;
        activeResultMessages = resultMessages;
    }
}

// 질문 표시
function showQuestion(index) {
    const question = activeQuestions[index];
    
    let optionsHTML = '';
    question.options.forEach((option, i) => {
        const isSelected = answers[index] === i;
        optionsHTML += `
            <div class="option ${isSelected ? 'selected' : ''}" data-index="${i}">
                ${option.text}
            </div>
        `;
    });

    questionContainer.innerHTML = `
        <div class="question">
            <div class="question-text">${index + 1}. ${question.question}</div>
            <div class="options">${optionsHTML}</div>
        </div>
    `;

    // 옵션 클릭 이벤트 추가
    document.querySelectorAll('.option').forEach(option => {
        option.addEventListener('click', () => {
            const optionIndex = parseInt(option.getAttribute('data-index'));
            answers[currentQuestionIndex] = optionIndex;
            document.querySelectorAll('.option').forEach(opt => opt.classList.remove('selected'));
            option.classList.add('selected');
        });
    });

    // 버튼 상태 업데이트
    updateButtonsState();
}

// 버튼 상태 업데이트
function updateButtonsState() {
    prevBtn.disabled = currentQuestionIndex === 0;
    
    const isLastQuestion = currentQuestionIndex === activeQuestions.length - 1;
    nextBtn.style.display = isLastQuestion ? 'none' : 'block';
    submitBtn.style.display = isLastQuestion ? 'block' : 'none';
}

// 이전 질문으로 이동
function goToPreviousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion(currentQuestionIndex);
    }
}

// 다음 질문으로 이동
function goToNextQuestion() {
    if (currentQuestionIndex < activeQuestions.length - 1) {
        currentQuestionIndex++;
        showQuestion(currentQuestionIndex);
    }
}

// 점수 계산
function calculateScore() {
    let totalScore = 0;
    
    answers.forEach((answerIndex, questionIndex) => {
        if (answerIndex !== null) {
            totalScore += activeQuestions[questionIndex].options[answerIndex].score;
        }
    });
    
    return totalScore;
}

// 결과 표시
function showResult() {
    const score = calculateScore();
    const lang = localStorage.getItem('selectedLanguage') || 'ko';
    
    // 현재 언어에 맞는 결과 메시지 객체 찾기
    let resultData;
    for (const result of activeResultMessages) {
        if (score >= result.minScore && score <= result.maxScore) {
            resultData = result;
            break;
        }
    }
    
    // 점수 표시
    scoreDisplay.textContent = `${lang === 'ko' ? '총점: ' : lang === 'en' ? 'Total Score: ' : 'Puntuación Total: '}${score}`;
    
    // 상세 결과 분석 HTML 구성
    let detailedHTML = `
        <div class="result-summary">
            <p class="result-message">${resultData.message}</p>
            <p class="detailed-analysis">${resultData.detailedAnalysis}</p>
        </div>
        
        <div class="result-details">
            <div class="strengths-weaknesses">
                <div class="strengths">
                    <h2>${lang === 'ko' ? '강점' : lang === 'en' ? 'Strengths' : 'Fortalezas'}</h2>
                    <ul>
                        ${resultData.strengths.map(strength => `<li>${strength}</li>`).join('')}
                    </ul>
                </div>
                
                <div class="weaknesses">
                    <h2>${lang === 'ko' ? '개선 필요 영역' : lang === 'en' ? 'Areas for Improvement' : 'Áreas de Mejora'}</h2>
                    <ul>
                        ${resultData.weaknesses.map(weakness => `<li>${weakness}</li>`).join('')}
                    </ul>
                </div>
            </div>
            
            <div class="recommendations">
                <h2>${lang === 'ko' ? '학습 추천' : lang === 'en' ? 'Learning Recommendations' : 'Recomendaciones de Aprendizaje'}</h2>
                <ul class="recommended-resources">
                    ${resultData.recommendations.map(rec => `
                        <li>
                            <a href="${rec.link}" target="_blank">
                                ${rec.title} <span class="resource-type">(${rec.type})</span>
                            </a>
                        </li>
                    `).join('')}
                </ul>
            </div>
            
            <div class="career-paths">
                <h2>${lang === 'ko' ? '관련 직무' : lang === 'en' ? 'Related Career Paths' : 'Trayectorias Profesionales Relacionadas'}</h2>
                <ul>
                    ${resultData.careerPaths.map(path => `<li>${path}</li>`).join('')}
                </ul>
            </div>
        </div>
    `;
    
    // 결과 메시지 업데이트
    resultMessageElement.innerHTML = detailedHTML;
    
    surveyContainer.style.display = 'none';
    resultContainer.style.display = 'block';
}

// 메인 페이지로 이동
function goToMainPage() {
    const lang = localStorage.getItem('selectedLanguage') || 'ko';
    window.location.href = `index.html?lang=${lang}`;
}

// 언어 변경 시 설문 업데이트
function updateSurveyLanguage(lang) {
    if (lang === 'en') {
        activeQuestions = questionsEN;
        activeResultMessages = resultMessagesEN;
    } else if (lang === 'es') {
        activeQuestions = questionsES;
        activeResultMessages = resultMessagesES;
    } else {
        activeQuestions = questions;
        activeResultMessages = resultMessages;
    }
    
    // 현재 페이지 상태 확인
    if (surveyContainer.style.display === 'block') {
        // 설문이 진행 중이면 현재 질문 재표시
        showQuestion(currentQuestionIndex);
    } else if (resultContainer.style.display === 'block') {
        // 결과 페이지가 표시 중이면 결과 재표시
        showResult();
    }
}

// 페이지 로드 시
document.addEventListener('DOMContentLoaded', function() {
    // 메인 JS에서 정의한 언어 설정 적용 함수 호출
    if (typeof applyStoredLanguageToPage === 'function') {
        applyStoredLanguageToPage();
    }
    
    // 초기화
    init();
    
    // 이벤트 리스너
    prevBtn.addEventListener('click', goToPreviousQuestion);
    nextBtn.addEventListener('click', goToNextQuestion);
    submitBtn.addEventListener('click', showResult);
    restartBtn.addEventListener('click', init);
    backToMainBtn.addEventListener('click', goToMainPage);
    
    // 언어 선택 이벤트 리스너
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            updateSurveyLanguage(lang);
        });
    });
}); 