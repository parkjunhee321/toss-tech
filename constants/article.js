//구현 방식 - 각 데이터 타입을 참고해서 그에 맞는 형식으로 엘리먼트를 리턴해주는 함수 제작 필요
const article = {
  resultType: "SUCCESS",
  error: null,
  success: {
    id: 86727,
    postId: 28762,
    title:
      "고성능 GPU 클러스터 도입기 #1: 요리하라고 해서 왔는데 프라이팬이 없어요",
    subtitle:
      "오늘은 토스증권은 왜 자체 LLM을 개발하기로 결정했는지, 그리고 왜 고성능 자체 GPU 클러스터가 필요했는지 설명드릴게요. 다음 포스트에서는 더 자세한 도입기를 다뤄보겠습니다.",
    category: "개발",
    categories: [
      {
        name: "개발",
        id: 1024,
        slug: "tech",
        parentId: null,
        iconUrl: "",
      },
      {
        name: "인기글",
        id: 1058,
        slug: null,
        parentId: 1024,
        iconUrl: null,
      },
    ],
    series: null,
    data: [
      {
        id: "6f7d8c67-8116-4fca-afba-75050146732f",
        type: "paragraph",
        object: "block",
        parent: {
          type: "page_id",
          page_id: "39c9162e-949d-472d-b06e-e04cade1ab56",
        },
        archived: false,
        in_trash: false,
        paragraph: {
          color: "default",
          rich_text: [
            {
              href: null,
              text: {
                link: null,
                content:
                  "‘좋은 투자’를 위해서는 무엇이 필요할까요? 많은 것들이 필요하겠지만 그중에서도 주가 변동, 거래량, 경제 지표, 뉴스 기사 등 ",
              },
              type: "text",
              plain_text:
                "‘좋은 투자’를 위해서는 무엇이 필요할까요? 많은 것들이 필요하겠지만 그중에서도 주가 변동, 거래량, 경제 지표, 뉴스 기사 등 ",
              annotations: {
                bold: false,
                code: false,
                color: "default",
                italic: false,
                underline: false,
                strikethrough: false,
              },
            },
            {
              href: null,
              text: {
                link: null,
                content:
                  "방대하고 어마어마한 양의 실시간 데이터를 종합하여 분석해서 가치 있는 정보를 추출하는 것이 필수",
              },
              type: "text",
              plain_text:
                "방대하고 어마어마한 양의 실시간 데이터를 종합하여 분석해서 가치 있는 정보를 추출하는 것이 필수",
              annotations: {
                bold: true,
                code: false,
                color: "default",
                italic: false,
                underline: false,
                strikethrough: false,
              },
            },
            {
              href: null,
              text: {
                link: null,
                content:
                  "입니다. 보통 ‘애널리스트’가 이런 작업을 하는데요. 애널리스트가 되기 위해선 수년, 수십 년간의 훈련과 경험을 통해 전문성을 쌓아야 합니다.",
              },
              type: "text",
              plain_text:
                "입니다. 보통 ‘애널리스트’가 이런 작업을 하는데요. 애널리스트가 되기 위해선 수년, 수십 년간의 훈련과 경험을 통해 전문성을 쌓아야 합니다.",
              annotations: {
                bold: false,
                code: false,
                color: "default",
                italic: false,
                underline: false,
                strikethrough: false,
              },
            },
          ],
        },
        created_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        created_time: "2024-07-10T05:14:00.000Z",
        has_children: false,
        last_edited_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        last_edited_time: "2024-07-10T06:00:00.000Z",
      },
      {
        id: "8cc1201e-74c8-4462-8a9b-00afc7e83dcb",
        type: "paragraph",
        object: "block",
        parent: {
          type: "page_id",
          page_id: "39c9162e-949d-472d-b06e-e04cade1ab56",
        },
        archived: false,
        in_trash: false,
        paragraph: {
          color: "default",
          rich_text: [
            {
              href: null,
              text: {
                link: null,
                content:
                  "하지만 토스증권은 ‘투자를 위한 분석 작업을 인공지능이 대신해주면 어떨까?’라는 생각을 하게 됩니다. 이 목표를 향해서 대용량 금융 및 증권 데이터를 효과적으로 취합하고 분석하여 사용자에게 가치 있는 정보를 제공하기 위한 연구를 계속해왔는데요. 이러한 작업을 가장 수행할 수 있는 도구로 최근에는 LLM(대형 언어 모델, Large Language Model)이 각광받고 있죠.",
              },
              type: "text",
              plain_text:
                "하지만 토스증권은 ‘투자를 위한 분석 작업을 인공지능이 대신해주면 어떨까?’라는 생각을 하게 됩니다. 이 목표를 향해서 대용량 금융 및 증권 데이터를 효과적으로 취합하고 분석하여 사용자에게 가치 있는 정보를 제공하기 위한 연구를 계속해왔는데요. 이러한 작업을 가장 수행할 수 있는 도구로 최근에는 LLM(대형 언어 모델, Large Language Model)이 각광받고 있죠.",
              annotations: {
                bold: false,
                code: false,
                color: "default",
                italic: false,
                underline: false,
                strikethrough: false,
              },
            },
          ],
        },
        created_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        created_time: "2024-07-10T05:19:00.000Z",
        has_children: false,
        last_edited_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        last_edited_time: "2024-07-10T06:00:00.000Z",
      },
      {
        id: "aa027350-bf07-4274-9943-07d138a2fdff",
        type: "paragraph",
        object: "block",
        parent: {
          type: "page_id",
          page_id: "39c9162e-949d-472d-b06e-e04cade1ab56",
        },
        archived: false,
        in_trash: false,
        paragraph: {
          color: "default",
          rich_text: [
            {
              href: null,
              text: {
                link: null,
                content:
                  "오늘은 토스증권은 왜 자체 LLM을 개발하기로 결정했는지, 그리고 왜 고성능 자체 GPU 클러스터가 필요했는지 설명드릴게요. 다음 포스트에서는 더 자세한 도입기를 다뤄보겠습니다",
              },
              type: "text",
              plain_text:
                "오늘은 토스증권은 왜 자체 LLM을 개발하기로 결정했는지, 그리고 왜 고성능 자체 GPU 클러스터가 필요했는지 설명드릴게요. 다음 포스트에서는 더 자세한 도입기를 다뤄보겠습니다",
              annotations: {
                bold: false,
                code: false,
                color: "default",
                italic: false,
                underline: false,
                strikethrough: false,
              },
            },
            {
              href: null,
              text: {
                link: null,
                content: ".",
              },
              type: "text",
              plain_text: ".",
              annotations: {
                bold: false,
                code: false,
                color: "default",
                italic: false,
                underline: false,
                strikethrough: false,
              },
            },
          ],
        },
        created_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        created_time: "2024-07-10T05:22:00.000Z",
        has_children: false,
        last_edited_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        last_edited_time: "2024-07-10T05:23:00.000Z",
      },
      {
        id: "45ea559e-c75d-4aeb-8466-8f762e3c4308",
        type: "paragraph",
        object: "block",
        parent: {
          type: "page_id",
          page_id: "39c9162e-949d-472d-b06e-e04cade1ab56",
        },
        archived: false,
        in_trash: false,
        paragraph: {
          color: "default",
          rich_text: [],
        },
        created_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        created_time: "2024-07-10T05:16:00.000Z",
        has_children: false,
        last_edited_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        last_edited_time: "2024-07-10T05:16:00.000Z",
      },
      {
        id: "afd2048c-e46a-4d11-9cef-5f384dde5c60",
        type: "heading_2",
        object: "block",
        parent: {
          type: "page_id",
          page_id: "39c9162e-949d-472d-b06e-e04cade1ab56",
        },
        archived: false,
        in_trash: false,
        heading_2: {
          color: "default",
          rich_text: [
            {
              href: null,
              text: {
                link: null,
                content: "토스증권에서 LLM을 필요로 하는 이유",
              },
              type: "text",
              plain_text: "토스증권에서 LLM을 필요로 하는 이유",
              annotations: {
                bold: false,
                code: false,
                color: "default",
                italic: false,
                underline: false,
                strikethrough: false,
              },
            },
          ],
          is_toggleable: false,
        },
        created_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        created_time: "2024-07-10T02:47:00.000Z",
        has_children: false,
        last_edited_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        last_edited_time: "2024-07-10T05:21:00.000Z",
      },
      {
        id: "2d23f8d6-9201-4189-8381-020da6815518",
        type: "paragraph",
        object: "block",
        parent: {
          type: "page_id",
          page_id: "39c9162e-949d-472d-b06e-e04cade1ab56",
        },
        archived: false,
        in_trash: false,
        paragraph: {
          color: "default",
          rich_text: [
            {
              href: null,
              text: {
                link: null,
                content:
                  "LLM은 단순한 텍스트뿐만 아니라 표, 그래프, 그림 등 인간이 인지할 수 있는 다양한 형태의 데이터와 인간도 인지하지 못하는 지표들을 습득하고 판별할 수 있기 때문에 토스증권에서 필요하다고 판단했습니다. 예를 들어, LLM으로 복잡한 금융 보고서를 분석하고, 트렌드를 예측하며, 사용자 맞춤형 투자 조언을 제공할 수 있어요.",
              },
              type: "text",
              plain_text:
                "LLM은 단순한 텍스트뿐만 아니라 표, 그래프, 그림 등 인간이 인지할 수 있는 다양한 형태의 데이터와 인간도 인지하지 못하는 지표들을 습득하고 판별할 수 있기 때문에 토스증권에서 필요하다고 판단했습니다. 예를 들어, LLM으로 복잡한 금융 보고서를 분석하고, 트렌드를 예측하며, 사용자 맞춤형 투자 조언을 제공할 수 있어요.",
              annotations: {
                bold: false,
                code: false,
                color: "default",
                italic: false,
                underline: false,
                strikethrough: false,
              },
            },
          ],
        },
        created_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        created_time: "2024-07-10T02:47:00.000Z",
        has_children: false,
        last_edited_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        last_edited_time: "2024-07-10T05:24:00.000Z",
      },
      {
        id: "7f054da4-68cd-4f6b-ac06-1b30cea55970",
        type: "callout",
        object: "block",
        parent: {
          type: "page_id",
          page_id: "39c9162e-949d-472d-b06e-e04cade1ab56",
        },
        callout: {
          icon: {
            type: "emoji",
            emoji: "🤔",
          },
          color: "gray_background",
          rich_text: [
            {
              href: null,
              text: {
                link: null,
                content: "여기서 잠깐, LLM이란?\n",
              },
              type: "text",
              plain_text: "여기서 잠깐, LLM이란?\n",
              annotations: {
                bold: true,
                code: false,
                color: "default",
                italic: false,
                underline: false,
                strikethrough: false,
              },
            },
            {
              href: null,
              text: {
                link: null,
                content:
                  "LLM(대형 언어 모델, Large Language Model)이란, 대규모 텍스트 데이터를 학습하여 인간과 유사한 자연어 이해와 생성 능력을 갖춘 인공지능 모델이에요. 이 모델은 방대한 양의 데이터에서 패턴과 규칙을 학습하여 문맥을 이해하고, 의미 있는 정보를 추출해낼 수 있습니다. LLM은 고도의 비정형적인 데이터를 처리할 수 있으며, 앞서 언급했듯이 단순한 텍스트뿐만 아니라 표, 그래프, 이미지 등 다양한 형태의 데이터를 분석하고 이해하는 능력이 있어요. 또한, LLM은 높은 유연성과 적응력을 가지고 있어, 특정 도메인에 맞춰 세밀하게 조정될 수 있고, 이를 통해 더욱 정교하고 전문적인 정보를 제공할 수 있어요. 이러한 특성 덕분에 LLM은 금융, 의료, 법률 등 여러 분야에서 복잡한 정보 분석과 예측에 혁신적인 도구로 사용되고 있어요.\n\n",
              },
              type: "text",
              plain_text:
                "LLM(대형 언어 모델, Large Language Model)이란, 대규모 텍스트 데이터를 학습하여 인간과 유사한 자연어 이해와 생성 능력을 갖춘 인공지능 모델이에요. 이 모델은 방대한 양의 데이터에서 패턴과 규칙을 학습하여 문맥을 이해하고, 의미 있는 정보를 추출해낼 수 있습니다. LLM은 고도의 비정형적인 데이터를 처리할 수 있으며, 앞서 언급했듯이 단순한 텍스트뿐만 아니라 표, 그래프, 이미지 등 다양한 형태의 데이터를 분석하고 이해하는 능력이 있어요. 또한, LLM은 높은 유연성과 적응력을 가지고 있어, 특정 도메인에 맞춰 세밀하게 조정될 수 있고, 이를 통해 더욱 정교하고 전문적인 정보를 제공할 수 있어요. 이러한 특성 덕분에 LLM은 금융, 의료, 법률 등 여러 분야에서 복잡한 정보 분석과 예측에 혁신적인 도구로 사용되고 있어요.\n\n",
              annotations: {
                bold: false,
                code: false,
                color: "default",
                italic: false,
                underline: false,
                strikethrough: false,
              },
            },
            {
              href: null,
              text: {
                link: null,
                content:
                  "엄밀히는 LLM과 LMM(Large Multimodal Model) 를 구분하여 사용해야 하지만 여기서는 편의상 모두 LLM으로 통일하여 쓰겠습니다!",
              },
              type: "text",
              plain_text:
                "엄밀히는 LLM과 LMM(Large Multimodal Model) 를 구분하여 사용해야 하지만 여기서는 편의상 모두 LLM으로 통일하여 쓰겠습니다!",
              annotations: {
                bold: false,
                code: false,
                color: "default",
                italic: false,
                underline: false,
                strikethrough: false,
              },
            },
          ],
        },
        archived: false,
        in_trash: false,
        created_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        created_time: "2024-07-10T02:47:00.000Z",
        has_children: false,
        last_edited_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        last_edited_time: "2024-07-11T02:11:00.000Z",
      },
      {
        id: "39c24e6f-0977-461a-82c1-cb612ece9192",
        type: "heading_3",
        object: "block",
        parent: {
          type: "page_id",
          page_id: "39c9162e-949d-472d-b06e-e04cade1ab56",
        },
        archived: false,
        in_trash: false,
        heading_3: {
          color: "default",
          rich_text: [
            {
              href: null,
              text: {
                link: null,
                content: "시중의 LLM으로는 해결할 수 없는 이유",
              },
              type: "text",
              plain_text: "시중의 LLM으로는 해결할 수 없는 이유",
              annotations: {
                bold: false,
                code: false,
                color: "default",
                italic: false,
                underline: false,
                strikethrough: false,
              },
            },
          ],
          is_toggleable: false,
        },
        created_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        created_time: "2024-07-10T02:47:00.000Z",
        has_children: false,
        last_edited_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        last_edited_time: "2024-07-10T02:48:00.000Z",
      },
      {
        id: "a218722d-8111-459e-a6cb-5abe26db8ce5",
        type: "paragraph",
        object: "block",
        parent: {
          type: "page_id",
          page_id: "39c9162e-949d-472d-b06e-e04cade1ab56",
        },
        archived: false,
        in_trash: false,
        paragraph: {
          color: "default",
          rich_text: [
            {
              href: null,
              text: {
                link: null,
                content:
                  "시중에 나와 있는 대부분의 LLM(대형 언어 모델)은 주로 ",
              },
              type: "text",
              plain_text:
                "시중에 나와 있는 대부분의 LLM(대형 언어 모델)은 주로 ",
              annotations: {
                bold: false,
                code: false,
                color: "default",
                italic: false,
                underline: false,
                strikethrough: false,
              },
            },
            {
              href: null,
              text: {
                link: null,
                content: "언어 이해와 생성",
              },
              type: "text",
              plain_text: "언어 이해와 생성",
              annotations: {
                bold: true,
                code: false,
                color: "default",
                italic: false,
                underline: false,
                strikethrough: false,
              },
            },
            {
              href: null,
              text: {
                link: null,
                content:
                  "에 초점을 맞추고 있고, 일반적인 텍스트 데이터에 대해 학습되었기 때문에 증권 관련 기초 지식은 가지고 있지만 고도화된 분석 능력은 부족해요. 이러한 가장 큰 이유는 증권 관련 데이터는 구축하기가 매우 어렵기 때문입니다. 증권 데이터는 매우 방대하며, 개인정보를 포함하고 있어 수집과 사용이 제한돼요. 또한, 증권 데이터는 다양한 형태로 존재하기 때문에 이를 효과적으로 처리하고 분석하기가 쉽지 않아요.",
              },
              type: "text",
              plain_text:
                "에 초점을 맞추고 있고, 일반적인 텍스트 데이터에 대해 학습되었기 때문에 증권 관련 기초 지식은 가지고 있지만 고도화된 분석 능력은 부족해요. 이러한 가장 큰 이유는 증권 관련 데이터는 구축하기가 매우 어렵기 때문입니다. 증권 데이터는 매우 방대하며, 개인정보를 포함하고 있어 수집과 사용이 제한돼요. 또한, 증권 데이터는 다양한 형태로 존재하기 때문에 이를 효과적으로 처리하고 분석하기가 쉽지 않아요.",
              annotations: {
                bold: false,
                code: false,
                color: "default",
                italic: false,
                underline: false,
                strikethrough: false,
              },
            },
          ],
        },
        created_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        created_time: "2024-07-10T02:47:00.000Z",
        has_children: false,
        last_edited_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        last_edited_time: "2024-07-10T03:54:00.000Z",
      },
      {
        id: "39b27fb2-92ef-411b-a58d-a8f0851be64d",
        type: "paragraph",
        object: "block",
        parent: {
          type: "page_id",
          page_id: "39c9162e-949d-472d-b06e-e04cade1ab56",
        },
        archived: false,
        in_trash: false,
        paragraph: {
          color: "default",
          rich_text: [
            {
              href: null,
              text: {
                link: null,
                content: "토스증권은 이러한 문제를 해결하기 위해 '",
              },
              type: "text",
              plain_text: "토스증권은 이러한 문제를 해결하기 위해 '",
              annotations: {
                bold: false,
                code: false,
                color: "default",
                italic: false,
                underline: false,
                strikethrough: false,
              },
            },
            {
              href: null,
              text: {
                link: null,
                content: "대도서관",
              },
              type: "text",
              plain_text: "대도서관",
              annotations: {
                bold: false,
                code: false,
                color: "default",
                italic: false,
                underline: false,
                strikethrough: false,
              },
            },
            {
              href: null,
              text: {
                link: null,
                content:
                  "' 프로젝트를 통해 자체 금융 데이터 해자를 구축하고 있습니다. 이 프로젝트는 방대하고 다양한 증권 데이터를 체계적으로 모으고 분석할 수 있도록 도와주고 있어요. ‘대도서관’ 프로젝트의 데이터를 LLM에 학습시킨다면, 유일무이한 증권 특화된 LLM을 만들 수 있겠죠. 이는 토스증권이 사용자들에게 더욱 정확하고 유용한 금융 정보를 제공하는 데 중요한 역할을 할 것입니다.",
              },
              type: "text",
              plain_text:
                "' 프로젝트를 통해 자체 금융 데이터 해자를 구축하고 있습니다. 이 프로젝트는 방대하고 다양한 증권 데이터를 체계적으로 모으고 분석할 수 있도록 도와주고 있어요. ‘대도서관’ 프로젝트의 데이터를 LLM에 학습시킨다면, 유일무이한 증권 특화된 LLM을 만들 수 있겠죠. 이는 토스증권이 사용자들에게 더욱 정확하고 유용한 금융 정보를 제공하는 데 중요한 역할을 할 것입니다.",
              annotations: {
                bold: false,
                code: false,
                color: "default",
                italic: false,
                underline: false,
                strikethrough: false,
              },
            },
          ],
        },
        created_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        created_time: "2024-07-10T02:47:00.000Z",
        has_children: false,
        last_edited_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        last_edited_time: "2024-07-10T03:47:00.000Z",
      },
      {
        id: "db102466-f420-410b-a8a4-4f30fcb96566",
        type: "image",
        image: {
          file: {
            url: "https://static.toss.im/ipd-tcs/toss_core/live/e536ada5-f2b6-4e24-a44f-02f2f9e7bcb6/Untitled.png",
          },
          type: "file",
          caption: [
            {
              href: null,
              text: {
                link: null,
                content:
                  "대도서관 프로젝트는 경제지표, 금리 등(좌측)의 데이터를 취합하여 다양한 서비스(우측)의 기반이 되고 있습니다.",
              },
              type: "text",
              plain_text:
                "대도서관 프로젝트는 경제지표, 금리 등(좌측)의 데이터를 취합하여 다양한 서비스(우측)의 기반이 되고 있습니다.",
              annotations: {
                bold: false,
                code: false,
                color: "default",
                italic: false,
                underline: false,
                strikethrough: false,
              },
            },
          ],
        },
        object: "block",
        parent: {
          type: "page_id",
          page_id: "39c9162e-949d-472d-b06e-e04cade1ab56",
        },
        archived: false,
        in_trash: false,
        created_by: {
          id: "630bd131-d6e9-4ed6-83d6-45dbe0e2f43d",
          object: "user",
        },
        created_time: "2024-07-11T07:20:00.000Z",
        has_children: false,
        last_edited_by: {
          id: "630bd131-d6e9-4ed6-83d6-45dbe0e2f43d",
          object: "user",
        },
        last_edited_time: "2024-07-11T07:21:00.000Z",
      },
      {
        id: "34ff45fb-544d-4c34-b240-d2b753e9f6af",
        type: "paragraph",
        object: "block",
        parent: {
          type: "page_id",
          page_id: "39c9162e-949d-472d-b06e-e04cade1ab56",
        },
        archived: false,
        in_trash: false,
        paragraph: {
          color: "default",
          rich_text: [],
        },
        created_by: {
          id: "630bd131-d6e9-4ed6-83d6-45dbe0e2f43d",
          object: "user",
        },
        created_time: "2024-07-11T07:14:00.000Z",
        has_children: false,
        last_edited_by: {
          id: "630bd131-d6e9-4ed6-83d6-45dbe0e2f43d",
          object: "user",
        },
        last_edited_time: "2024-07-11T07:14:00.000Z",
      },
      {
        id: "aac9028e-ce55-4df8-a679-47187476a369",
        type: "heading_3",
        object: "block",
        parent: {
          type: "page_id",
          page_id: "39c9162e-949d-472d-b06e-e04cade1ab56",
        },
        archived: false,
        in_trash: false,
        heading_3: {
          color: "default",
          rich_text: [
            {
              href: null,
              text: {
                link: null,
                content:
                  "토스증권 LLM을 위한 자체 고성능 GPU 클러스터의 필요성",
              },
              type: "text",
              plain_text:
                "토스증권 LLM을 위한 자체 고성능 GPU 클러스터의 필요성",
              annotations: {
                bold: false,
                code: false,
                color: "default",
                italic: false,
                underline: false,
                strikethrough: false,
              },
            },
          ],
          is_toggleable: false,
        },
        created_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        created_time: "2024-07-10T02:47:00.000Z",
        has_children: false,
        last_edited_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        last_edited_time: "2024-07-10T02:48:00.000Z",
      },
      {
        id: "5814d627-847b-4f78-933a-f360c5f6d054",
        type: "paragraph",
        object: "block",
        parent: {
          type: "page_id",
          page_id: "39c9162e-949d-472d-b06e-e04cade1ab56",
        },
        archived: false,
        in_trash: false,
        paragraph: {
          color: "default",
          rich_text: [
            {
              href: null,
              text: {
                link: null,
                content:
                  "토스증권이 왜 LLM을 필요로 하는지, 시중의 LLM이 어떤 한계점을 가지고 있는지 살펴보았는데요. 이제는 토스증권의 LLM을 위해 왜 '자체' 그리고 '고성능' 클러스터가 필요한지 이야기해보겠습니다.",
              },
              type: "text",
              plain_text:
                "토스증권이 왜 LLM을 필요로 하는지, 시중의 LLM이 어떤 한계점을 가지고 있는지 살펴보았는데요. 이제는 토스증권의 LLM을 위해 왜 '자체' 그리고 '고성능' 클러스터가 필요한지 이야기해보겠습니다.",
              annotations: {
                bold: false,
                code: false,
                color: "default",
                italic: false,
                underline: false,
                strikethrough: false,
              },
            },
          ],
        },
        created_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        created_time: "2024-07-10T02:47:00.000Z",
        has_children: false,
        last_edited_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        last_edited_time: "2024-07-10T03:55:00.000Z",
      },
      {
        id: "16394084-6a00-475e-b7da-8dba7ae5b0da",
        type: "paragraph",
        object: "block",
        parent: {
          type: "page_id",
          page_id: "39c9162e-949d-472d-b06e-e04cade1ab56",
        },
        archived: false,
        in_trash: false,
        paragraph: {
          color: "default",
          rich_text: [
            {
              href: null,
              text: {
                link: null,
                content: "먼저 '자체 클러스터'를 구축하는 가장 큰 이유는 ",
              },
              type: "text",
              plain_text: "먼저 '자체 클러스터'를 구축하는 가장 큰 이유는 ",
              annotations: {
                bold: false,
                code: false,
                color: "default",
                italic: false,
                underline: false,
                strikethrough: false,
              },
            },
            {
              href: null,
              text: {
                link: null,
                content: "개인정보 보호 이슈",
              },
              type: "text",
              plain_text: "개인정보 보호 이슈",
              annotations: {
                bold: true,
                code: false,
                color: "default",
                italic: false,
                underline: false,
                strikethrough: false,
              },
            },
            {
              href: null,
              text: {
                link: null,
                content:
                  " 때문입니다. 토스증권은 사용자들의 다양한 개인정보를 보유하고 있는데, 이러한 민감한 데이터는 여러 가지 이유로 클라우드에 올리기 어렵습니다. ",
              },
              type: "text",
              plain_text:
                " 때문입니다. 토스증권은 사용자들의 다양한 개인정보를 보유하고 있는데, 이러한 민감한 데이터는 여러 가지 이유로 클라우드에 올리기 어렵습니다. ",
              annotations: {
                bold: false,
                code: false,
                color: "default",
                italic: false,
                underline: false,
                strikethrough: false,
              },
            },
            {
              href: null,
              text: {
                link: null,
                content:
                  "만약 클라우드에 적재할 수 있다고 하더라도, 데이터의 일부만 적재할 수 있는 경우가 많고, 민감한 정보는 ",
              },
              type: "text",
              plain_text:
                "만약 클라우드에 적재할 수 있다고 하더라도, 데이터의 일부만 적재할 수 있는 경우가 많고, 민감한 정보는 ",
              annotations: {
                bold: false,
                code: false,
                color: "default",
                italic: false,
                underline: false,
                strikethrough: false,
              },
            },
            {
              href: null,
              text: {
                link: null,
                content:
                  "개인을 식별할 수 없도록 조치(마스킹, 일부 데이터 삭제, 랜덤값으로 대체 등)",
              },
              type: "text",
              plain_text:
                "개인을 식별할 수 없도록 조치(마스킹, 일부 데이터 삭제, 랜덤값으로 대체 등)",
              annotations: {
                bold: true,
                code: false,
                color: "default",
                italic: false,
                underline: false,
                strikethrough: false,
              },
            },
            {
              href: null,
              text: {
                link: null,
                content:
                  " 을 해야 돼요. 이 때문에 단순한 클라우드 이용 요금 외에도 ",
              },
              type: "text",
              plain_text:
                " 을 해야 돼요. 이 때문에 단순한 클라우드 이용 요금 외에도 ",
              annotations: {
                bold: false,
                code: false,
                color: "default",
                italic: false,
                underline: false,
                strikethrough: false,
              },
            },
            {
              href: null,
              text: {
                link: null,
                content:
                  "개인정보 보호를 위한 관련 규제 검토 및 조치를 위한 자원 ",
              },
              type: "text",
              plain_text:
                "개인정보 보호를 위한 관련 규제 검토 및 조치를 위한 자원 ",
              annotations: {
                bold: true,
                code: false,
                color: "default",
                italic: false,
                underline: false,
                strikethrough: false,
              },
            },
            {
              href: null,
              text: {
                link: null,
                content:
                  "비용이 추가로 발생하며 이러한 추가적인 프로세스로 인해 실시간성이 떨어진다는 단점 또한 존재합니다.",
              },
              type: "text",
              plain_text:
                "비용이 추가로 발생하며 이러한 추가적인 프로세스로 인해 실시간성이 떨어진다는 단점 또한 존재합니다.",
              annotations: {
                bold: false,
                code: false,
                color: "default",
                italic: false,
                underline: false,
                strikethrough: false,
              },
            },
          ],
        },
        created_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        created_time: "2024-07-10T02:47:00.000Z",
        has_children: false,
        last_edited_by: {
          id: "630bd131-d6e9-4ed6-83d6-45dbe0e2f43d",
          object: "user",
        },
        last_edited_time: "2024-07-17T06:24:00.000Z",
      },
      {
        id: "1f5573de-2f9d-466d-a27e-f627a9846883",
        type: "paragraph",
        object: "block",
        parent: {
          type: "page_id",
          page_id: "39c9162e-949d-472d-b06e-e04cade1ab56",
        },
        archived: false,
        in_trash: false,
        paragraph: {
          color: "default",
          rich_text: [],
        },
        created_by: {
          id: "630bd131-d6e9-4ed6-83d6-45dbe0e2f43d",
          object: "user",
        },
        created_time: "2024-07-16T10:01:00.000Z",
        has_children: false,
        last_edited_by: {
          id: "630bd131-d6e9-4ed6-83d6-45dbe0e2f43d",
          object: "user",
        },
        last_edited_time: "2024-07-16T10:01:00.000Z",
      },
      {
        id: "3a241f37-902e-4c66-911f-e229453a5e3a",
        type: "paragraph",
        object: "block",
        parent: {
          type: "page_id",
          page_id: "39c9162e-949d-472d-b06e-e04cade1ab56",
        },
        archived: false,
        in_trash: false,
        paragraph: {
          color: "default",
          rich_text: [
            {
              href: null,
              text: {
                link: null,
                content: "‘자체 클러스터’를 구축해야 하는 또 다른 이유로는 ",
              },
              type: "text",
              plain_text: "‘자체 클러스터’를 구축해야 하는 또 다른 이유로는 ",
              annotations: {
                bold: false,
                code: false,
                color: "default",
                italic: false,
                underline: false,
                strikethrough: false,
              },
            },
            {
              href: null,
              text: {
                link: null,
                content: "비용 효율화도",
              },
              type: "text",
              plain_text: "비용 효율화도",
              annotations: {
                bold: true,
                code: false,
                color: "default",
                italic: false,
                underline: false,
                strikethrough: false,
              },
            },
            {
              href: null,
              text: {
                link: null,
                content:
                  " 꼽을 수 있어요. 현재 외부 API를 이용하는 경우 입력(질문)길이+출력(대답)길이*모델별 기준가격으로 책정 되는데요, 특히 출력 길이가 길어질수록 과금이 많이 되고 있는 구조입니다. ",
              },
              type: "text",
              plain_text:
                " 꼽을 수 있어요. 현재 외부 API를 이용하는 경우 입력(질문)길이+출력(대답)길이*모델별 기준가격으로 책정 되는데요, 특히 출력 길이가 길어질수록 과금이 많이 되고 있는 구조입니다. ",
              annotations: {
                bold: false,
                code: false,
                color: "default",
                italic: false,
                underline: false,
                strikethrough: false,
              },
            },
            {
              href: null,
              text: {
                link: null,
                content:
                  "이러한 구조에서는 다양한 서비스에서 LLM을 공격적으로 호출해보거나 성능을 올리기 위해 더 큰 모델의 LLM을 사용하는 등의 이용 패턴에 제약이 걸릴 수밖에 없어요.",
              },
              type: "text",
              plain_text:
                "이러한 구조에서는 다양한 서비스에서 LLM을 공격적으로 호출해보거나 성능을 올리기 위해 더 큰 모델의 LLM을 사용하는 등의 이용 패턴에 제약이 걸릴 수밖에 없어요.",
              annotations: {
                bold: false,
                code: false,
                color: "default",
                italic: false,
                underline: false,
                strikethrough: false,
              },
            },
          ],
        },
        created_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        created_time: "2024-07-10T03:56:00.000Z",
        has_children: false,
        last_edited_by: {
          id: "630bd131-d6e9-4ed6-83d6-45dbe0e2f43d",
          object: "user",
        },
        last_edited_time: "2024-07-16T08:29:00.000Z",
      },
      {
        id: "2d99bb96-4d93-46af-abd1-4db1609c4a24",
        type: "paragraph",
        object: "block",
        parent: {
          type: "page_id",
          page_id: "39c9162e-949d-472d-b06e-e04cade1ab56",
        },
        archived: false,
        in_trash: false,
        paragraph: {
          color: "default",
          rich_text: [
            {
              href: null,
              text: {
                link: null,
                content: "‘고성능 클러스터’가 필요한 이유는 ",
              },
              type: "text",
              plain_text: "‘고성능 클러스터’가 필요한 이유는 ",
              annotations: {
                bold: false,
                code: false,
                color: "default",
                italic: false,
                underline: false,
                strikethrough: false,
              },
            },
            {
              href: null,
              text: {
                link: null,
                content: "LLM의 절대적인 모델 크기",
              },
              type: "text",
              plain_text: "LLM의 절대적인 모델 크기",
              annotations: {
                bold: true,
                code: false,
                color: "default",
                italic: false,
                underline: false,
                strikethrough: false,
              },
            },
            {
              href: null,
              text: {
                link: null,
                content:
                  " 때문입니다. 이러한 이유로 LLM을 학습 시에는 여러 대의 GPU 서버를 엮어 GPU 서버 그룹(클러스터)를 구축하고, 대용량 데이터를 동시에 학습하는 것이 일반적이에요. 추론의 경우 단일 GPU 서버로도 가능하지만, 응답 속도가 길어지는 단점이 있어요. 특히 생성형 AI의 경우 많은 양의 단어를 생성하는데, 동시에 여러 단어를 생성할 수 없는 특성상 응답 속도가 길어지면 사용자의 서비스 만족도가 낮아질 수밖에 없어요. 따라서 여러 개의 GPU를 엮어 추론하는 것이 일반적입니다. 또한, 다수의 사용자의 요청이 동시에 들어오는 경우도 고려해야 합니다.",
              },
              type: "text",
              plain_text:
                " 때문입니다. 이러한 이유로 LLM을 학습 시에는 여러 대의 GPU 서버를 엮어 GPU 서버 그룹(클러스터)를 구축하고, 대용량 데이터를 동시에 학습하는 것이 일반적이에요. 추론의 경우 단일 GPU 서버로도 가능하지만, 응답 속도가 길어지는 단점이 있어요. 특히 생성형 AI의 경우 많은 양의 단어를 생성하는데, 동시에 여러 단어를 생성할 수 없는 특성상 응답 속도가 길어지면 사용자의 서비스 만족도가 낮아질 수밖에 없어요. 따라서 여러 개의 GPU를 엮어 추론하는 것이 일반적입니다. 또한, 다수의 사용자의 요청이 동시에 들어오는 경우도 고려해야 합니다.",
              annotations: {
                bold: false,
                code: false,
                color: "default",
                italic: false,
                underline: false,
                strikethrough: false,
              },
            },
          ],
        },
        created_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        created_time: "2024-07-10T02:47:00.000Z",
        has_children: false,
        last_edited_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        last_edited_time: "2024-07-10T03:57:00.000Z",
      },
      {
        id: "d4b3df8e-b64a-42a7-a676-4f54e7d2d156",
        type: "paragraph",
        object: "block",
        parent: {
          type: "page_id",
          page_id: "39c9162e-949d-472d-b06e-e04cade1ab56",
        },
        archived: false,
        in_trash: false,
        paragraph: {
          color: "default",
          rich_text: [
            {
              href: null,
              text: {
                link: null,
                content:
                  "따라서 이러한 인프라를 자체적으로 구축함으로써 보다 안전하고 효율적인 환경을 마련 할 수 있습니다. 이러한 노력은 사용자들에게 보다 혁신적이고 안전한 금융 서비스를 제공하는 데 기여할 것입니다.",
              },
              type: "text",
              plain_text:
                "따라서 이러한 인프라를 자체적으로 구축함으로써 보다 안전하고 효율적인 환경을 마련 할 수 있습니다. 이러한 노력은 사용자들에게 보다 혁신적이고 안전한 금융 서비스를 제공하는 데 기여할 것입니다.",
              annotations: {
                bold: false,
                code: false,
                color: "default",
                italic: false,
                underline: false,
                strikethrough: false,
              },
            },
          ],
        },
        created_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        created_time: "2024-07-10T02:47:00.000Z",
        has_children: false,
        last_edited_by: {
          id: "630bd131-d6e9-4ed6-83d6-45dbe0e2f43d",
          object: "user",
        },
        last_edited_time: "2024-07-17T06:27:00.000Z",
      },
      {
        id: "d58f2004-89bd-42cd-adac-5e23a40d7295",
        type: "heading_2",
        object: "block",
        parent: {
          type: "page_id",
          page_id: "39c9162e-949d-472d-b06e-e04cade1ab56",
        },
        archived: false,
        in_trash: false,
        heading_2: {
          color: "default",
          rich_text: [
            {
              href: null,
              text: {
                link: null,
                content: "GPU 클러스터란 무엇일까요?",
              },
              type: "text",
              plain_text: "GPU 클러스터란 무엇일까요?",
              annotations: {
                bold: false,
                code: false,
                color: "default",
                italic: false,
                underline: false,
                strikethrough: false,
              },
            },
          ],
          is_toggleable: false,
        },
        created_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        created_time: "2024-07-10T02:47:00.000Z",
        has_children: false,
        last_edited_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        last_edited_time: "2024-07-10T02:48:00.000Z",
      },
      {
        id: "4225f31f-ae17-477f-8f82-5cc213f76389",
        type: "paragraph",
        object: "block",
        parent: {
          type: "page_id",
          page_id: "39c9162e-949d-472d-b06e-e04cade1ab56",
        },
        archived: false,
        in_trash: false,
        paragraph: {
          color: "default",
          rich_text: [
            {
              href: null,
              text: {
                link: null,
                content:
                  "토스증권이 왜 LLM을 필요로 하는지, 그리고 토스증권만의 LLM을 위해 왜 자체 고성능 GPU 클러스터가 필요한지에 대해 LLM 중심으로 얘기해봤는데요. 이제는 GPU 클러스터에 대해 좀 더 자세히 다루어 설명드릴게요.",
              },
              type: "text",
              plain_text:
                "토스증권이 왜 LLM을 필요로 하는지, 그리고 토스증권만의 LLM을 위해 왜 자체 고성능 GPU 클러스터가 필요한지에 대해 LLM 중심으로 얘기해봤는데요. 이제는 GPU 클러스터에 대해 좀 더 자세히 다루어 설명드릴게요.",
              annotations: {
                bold: false,
                code: false,
                color: "default",
                italic: false,
                underline: false,
                strikethrough: false,
              },
            },
          ],
        },
        created_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        created_time: "2024-07-10T02:47:00.000Z",
        has_children: false,
        last_edited_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        last_edited_time: "2024-07-10T03:57:00.000Z",
      },
      {
        id: "9b9d3431-1c81-4573-bb49-73df58658bbb",
        type: "paragraph",
        object: "block",
        parent: {
          type: "page_id",
          page_id: "39c9162e-949d-472d-b06e-e04cade1ab56",
        },
        archived: false,
        in_trash: false,
        paragraph: {
          color: "default",
          rich_text: [
            {
              href: null,
              text: {
                link: null,
                content:
                  "GPU(Graphic Processing Unit, 그래픽 처리 장치)는 대규모 병렬 연산을 수행할 수 있는 컴퓨팅 장치입니다. 원래는 그래픽 렌더링을 위해 개발되었지만, 현재는 그 뛰어난 병렬 처리 능력 덕분에 다양한 분야에서 활용되고 있습니다.",
              },
              type: "text",
              plain_text:
                "GPU(Graphic Processing Unit, 그래픽 처리 장치)는 대규모 병렬 연산을 수행할 수 있는 컴퓨팅 장치입니다. 원래는 그래픽 렌더링을 위해 개발되었지만, 현재는 그 뛰어난 병렬 처리 능력 덕분에 다양한 분야에서 활용되고 있습니다.",
              annotations: {
                bold: false,
                code: false,
                color: "default",
                italic: false,
                underline: false,
                strikethrough: false,
              },
            },
          ],
        },
        created_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        created_time: "2024-07-10T03:30:00.000Z",
        has_children: false,
        last_edited_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        last_edited_time: "2024-07-10T03:30:00.000Z",
      },
      {
        id: "31e4b08d-520e-4506-adbf-48253c079e7b",
        type: "callout",
        object: "block",
        parent: {
          type: "page_id",
          page_id: "39c9162e-949d-472d-b06e-e04cade1ab56",
        },
        callout: {
          icon: {
            type: "emoji",
            emoji: "🤔",
          },
          color: "gray_background",
          rich_text: [
            {
              href: null,
              text: {
                link: null,
                content: "여기서 잠깐, GPU 클러스터란(Cluster)?\n",
              },
              type: "text",
              plain_text: "여기서 잠깐, GPU 클러스터란(Cluster)?\n",
              annotations: {
                bold: true,
                code: false,
                color: "default",
                italic: false,
                underline: false,
                strikethrough: false,
              },
            },
            {
              href: null,
              text: {
                link: null,
                content:
                  "GPU 클러스터란 단순히 여러 GPU 서버를 하나의 네트워크로 묶은 것을 이야기합니다.",
              },
              type: "text",
              plain_text:
                "GPU 클러스터란 단순히 여러 GPU 서버를 하나의 네트워크로 묶은 것을 이야기합니다.",
              annotations: {
                bold: false,
                code: false,
                color: "default",
                italic: false,
                underline: false,
                strikethrough: false,
              },
            },
          ],
        },
        archived: false,
        in_trash: false,
        created_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        created_time: "2024-07-10T02:47:00.000Z",
        has_children: false,
        last_edited_by: {
          id: "630bd131-d6e9-4ed6-83d6-45dbe0e2f43d",
          object: "user",
        },
        last_edited_time: "2024-07-11T00:16:00.000Z",
      },
      {
        id: "2377b5ad-6c13-4cb6-9c6b-e3c77536e398",
        type: "paragraph",
        object: "block",
        parent: {
          type: "page_id",
          page_id: "39c9162e-949d-472d-b06e-e04cade1ab56",
        },
        archived: false,
        in_trash: false,
        paragraph: {
          color: "default",
          rich_text: [],
        },
        created_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        created_time: "2024-07-10T02:47:00.000Z",
        has_children: false,
        last_edited_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        last_edited_time: "2024-07-10T03:30:00.000Z",
      },
      {
        id: "254bb079-30b6-4c1d-a5ea-cf6eba5878ec",
        type: "heading_3",
        object: "block",
        parent: {
          type: "page_id",
          page_id: "39c9162e-949d-472d-b06e-e04cade1ab56",
        },
        archived: false,
        in_trash: false,
        heading_3: {
          color: "default",
          rich_text: [
            {
              href: null,
              text: {
                link: null,
                content: "CPU와 GPU의 구조 비교",
              },
              type: "text",
              plain_text: "CPU와 GPU의 구조 비교",
              annotations: {
                bold: false,
                code: false,
                color: "default",
                italic: false,
                underline: false,
                strikethrough: false,
              },
            },
          ],
          is_toggleable: false,
        },
        created_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        created_time: "2024-07-10T02:47:00.000Z",
        has_children: false,
        last_edited_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        last_edited_time: "2024-07-10T02:47:00.000Z",
      },
      {
        id: "a27fceb7-f60e-4904-a9ef-1834ae6660b2",
        type: "image",
        image: {
          file: {
            url: "https://static.toss.im/ipd-tcs/toss_core/live/70ebead2-1832-4887-b0d9-4c0ff6f42ee4/18535d38-1afd-4b01-a6b4-4c6642475c2d",
          },
          type: "file",
          caption: [
            {
              href: null,
              text: {
                link: null,
                content:
                  "출처 : https://docs.nvidia.com/cuda/cuda-c-programming-guide/index.html",
              },
              type: "text",
              plain_text:
                "출처 : https://docs.nvidia.com/cuda/cuda-c-programming-guide/index.html",
              annotations: {
                bold: false,
                code: false,
                color: "default",
                italic: false,
                underline: false,
                strikethrough: false,
              },
            },
          ],
        },
        object: "block",
        parent: {
          type: "page_id",
          page_id: "39c9162e-949d-472d-b06e-e04cade1ab56",
        },
        archived: false,
        in_trash: false,
        created_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        created_time: "2024-07-10T02:47:00.000Z",
        has_children: false,
        last_edited_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        last_edited_time: "2024-07-10T02:47:00.000Z",
      },
      {
        id: "d2fc8fd4-32fe-4513-a9f8-3003c92055b9",
        type: "paragraph",
        object: "block",
        parent: {
          type: "page_id",
          page_id: "39c9162e-949d-472d-b06e-e04cade1ab56",
        },
        archived: false,
        in_trash: false,
        paragraph: {
          color: "default",
          rich_text: [
            {
              href: null,
              text: {
                link: null,
                content:
                  "위의 그림은 CPU와 GPU의 메모리 및 코어 구조를 간략화하여 보여주고 있어요. 그림의 초록색이 코어를 나타내는데, 보시는 바와 같이 GPU는 CPU 대비 코어의 개수가 압도적으로 많죠. 이에 반해 CPU는 소수의 고성능 코어로 구성되어 있으며, 각 코어는 높은 연산 성능과 상대적으로 큰 L1 캐시를 가지고 있어 복잡한 제어 작업과 재귀 같은 복잡한 연산에 적합해요. 반면, ",
              },
              type: "text",
              plain_text:
                "위의 그림은 CPU와 GPU의 메모리 및 코어 구조를 간략화하여 보여주고 있어요. 그림의 초록색이 코어를 나타내는데, 보시는 바와 같이 GPU는 CPU 대비 코어의 개수가 압도적으로 많죠. 이에 반해 CPU는 소수의 고성능 코어로 구성되어 있으며, 각 코어는 높은 연산 성능과 상대적으로 큰 L1 캐시를 가지고 있어 복잡한 제어 작업과 재귀 같은 복잡한 연산에 적합해요. 반면, ",
              annotations: {
                bold: false,
                code: false,
                color: "default",
                italic: false,
                underline: false,
                strikethrough: false,
              },
            },
            {
              href: null,
              text: {
                link: null,
                content:
                  "GPU는 수많은 저성능 코어로 구성되어 있어 보다 병렬 연산에 유리하며, 각 코어의 컨트롤러 크기와 L1 캐시의 크기가 작아 복잡한 제어 작업에는 적합하지 않습니다.",
              },
              type: "text",
              plain_text:
                "GPU는 수많은 저성능 코어로 구성되어 있어 보다 병렬 연산에 유리하며, 각 코어의 컨트롤러 크기와 L1 캐시의 크기가 작아 복잡한 제어 작업에는 적합하지 않습니다.",
              annotations: {
                bold: true,
                code: false,
                color: "default",
                italic: false,
                underline: false,
                strikethrough: false,
              },
            },
          ],
        },
        created_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        created_time: "2024-07-10T02:47:00.000Z",
        has_children: false,
        last_edited_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        last_edited_time: "2024-07-10T06:01:00.000Z",
      },
      {
        id: "41a97898-52e3-4c6a-80be-e92478b163bd",
        type: "paragraph",
        object: "block",
        parent: {
          type: "page_id",
          page_id: "39c9162e-949d-472d-b06e-e04cade1ab56",
        },
        archived: false,
        in_trash: false,
        paragraph: {
          color: "default",
          rich_text: [
            {
              href: null,
              text: {
                link: null,
                content:
                  "초기 GPU는 주로 모니터 화면에 렌더링 값을 초당 수십 번 연산하여 출력하는 용도로 사용됐어요. 이로 인해 정확한 값보다는 처리량이 더 중요했습니다. 때문에 초기 GPU는 CPU와 부동 소수점 연산 명령어도 달랐고, 오차가 꽤 컸어요. 다만, 부동 소수점 연산 값이 조금 틀려도 화면으로 출력했을 때는 사람이 알아차리기 어려웠기 때문에 크게 문제가 되진 않았습니다. 그러나 현대의 과학 연산용 GPU는 기존 화면 출력용보다는 데이터 처리용으로 그 목적이 변경되었기 때문에, 정확한 연산 결과 및 다른 CPU/GPU와의 호환성(재구현성)에 신경을 많이 쓰고 있습니다.",
              },
              type: "text",
              plain_text:
                "초기 GPU는 주로 모니터 화면에 렌더링 값을 초당 수십 번 연산하여 출력하는 용도로 사용됐어요. 이로 인해 정확한 값보다는 처리량이 더 중요했습니다. 때문에 초기 GPU는 CPU와 부동 소수점 연산 명령어도 달랐고, 오차가 꽤 컸어요. 다만, 부동 소수점 연산 값이 조금 틀려도 화면으로 출력했을 때는 사람이 알아차리기 어려웠기 때문에 크게 문제가 되진 않았습니다. 그러나 현대의 과학 연산용 GPU는 기존 화면 출력용보다는 데이터 처리용으로 그 목적이 변경되었기 때문에, 정확한 연산 결과 및 다른 CPU/GPU와의 호환성(재구현성)에 신경을 많이 쓰고 있습니다.",
              annotations: {
                bold: false,
                code: false,
                color: "default",
                italic: false,
                underline: false,
                strikethrough: false,
              },
            },
          ],
        },
        created_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        created_time: "2024-07-10T02:47:00.000Z",
        has_children: false,
        last_edited_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        last_edited_time: "2024-07-10T06:01:00.000Z",
      },
      {
        id: "5044186e-bad6-455b-9279-d6fc2508656c",
        type: "heading_3",
        object: "block",
        parent: {
          type: "page_id",
          page_id: "39c9162e-949d-472d-b06e-e04cade1ab56",
        },
        archived: false,
        in_trash: false,
        heading_3: {
          color: "default",
          rich_text: [
            {
              href: null,
              text: {
                link: null,
                content: "GPU가 인공지능 학습 및 추론에 필수인 이유",
              },
              type: "text",
              plain_text: "GPU가 인공지능 학습 및 추론에 필수인 이유",
              annotations: {
                bold: false,
                code: false,
                color: "default",
                italic: false,
                underline: false,
                strikethrough: false,
              },
            },
          ],
          is_toggleable: false,
        },
        created_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        created_time: "2024-07-10T02:47:00.000Z",
        has_children: false,
        last_edited_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        last_edited_time: "2024-07-10T02:47:00.000Z",
      },
      {
        id: "4ff814fd-f4cf-4d78-b3b8-729a21070d98",
        type: "paragraph",
        object: "block",
        parent: {
          type: "page_id",
          page_id: "39c9162e-949d-472d-b06e-e04cade1ab56",
        },
        archived: false,
        in_trash: false,
        paragraph: {
          color: "default",
          rich_text: [
            {
              href: null,
              text: {
                link: null,
                content:
                  "앞서 GPU의 병렬 프로세싱 구조에 대해 살펴보았는데요, 이러한 GPU가 인공지능에 필수 요소로 자리매김한 이유에 대해서도 이야기 해볼게요.",
              },
              type: "text",
              plain_text:
                "앞서 GPU의 병렬 프로세싱 구조에 대해 살펴보았는데요, 이러한 GPU가 인공지능에 필수 요소로 자리매김한 이유에 대해서도 이야기 해볼게요.",
              annotations: {
                bold: false,
                code: false,
                color: "default",
                italic: false,
                underline: false,
                strikethrough: false,
              },
            },
          ],
        },
        created_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        created_time: "2024-07-10T02:47:00.000Z",
        has_children: false,
        last_edited_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        last_edited_time: "2024-07-10T03:58:00.000Z",
      },
      {
        id: "d33da9a5-a8aa-4646-b30d-71d810a9e30c",
        type: "paragraph",
        object: "block",
        parent: {
          type: "page_id",
          page_id: "39c9162e-949d-472d-b06e-e04cade1ab56",
        },
        archived: false,
        in_trash: false,
        paragraph: {
          color: "default",
          rich_text: [
            {
              href: null,
              text: {
                link: null,
                content:
                  "가장 큰 이유는 AI 작업, 특히 딥러닝은 이러한 GPU의 병렬 구조가 매우 적합하기 때문입니다. 딥러닝 모델의 학습과 추론 과정은 많은 수의 ",
              },
              type: "text",
              plain_text:
                "가장 큰 이유는 AI 작업, 특히 딥러닝은 이러한 GPU의 병렬 구조가 매우 적합하기 때문입니다. 딥러닝 모델의 학습과 추론 과정은 많은 수의 ",
              annotations: {
                bold: false,
                code: false,
                color: "default",
                italic: false,
                underline: false,
                strikethrough: false,
              },
            },
            {
              href: null,
              text: {
                link: null,
                content: "행렬 연산",
              },
              type: "text",
              plain_text: "행렬 연산",
              annotations: {
                bold: true,
                code: false,
                color: "default",
                italic: false,
                underline: false,
                strikethrough: false,
              },
            },
            {
              href: null,
              text: {
                link: null,
                content:
                  "을 포함합니다. 이때 행렬의 사이즈는 크게는 몇 만인 경우도 있습니다. GPU는 이러한 대규모의 행렬 곱의 연산에 CPU 대비 탁월한 성능을 가지고 있습니다. 또한, 이러한 병렬 처리에는 대규모 데이터를 신속하게 처리할 수 있는 높은 메모리 대역폭도 지원해요. ",
              },
              type: "text",
              plain_text:
                "을 포함합니다. 이때 행렬의 사이즈는 크게는 몇 만인 경우도 있습니다. GPU는 이러한 대규모의 행렬 곱의 연산에 CPU 대비 탁월한 성능을 가지고 있습니다. 또한, 이러한 병렬 처리에는 대규모 데이터를 신속하게 처리할 수 있는 높은 메모리 대역폭도 지원해요. ",
              annotations: {
                bold: false,
                code: false,
                color: "default",
                italic: false,
                underline: false,
                strikethrough: false,
              },
            },
            {
              href: null,
              text: {
                link: null,
                content:
                  "현대의 과학 연산용 GPU는 Nvidia H100 기준 약 3TB/s을 제공하고 있어 CPU 대비(DDR5 기준 약 40-60 GB/s) 약 50배의 데이터를 동 시간 동안 처리할 수 있어요.",
              },
              type: "text",
              plain_text:
                "현대의 과학 연산용 GPU는 Nvidia H100 기준 약 3TB/s을 제공하고 있어 CPU 대비(DDR5 기준 약 40-60 GB/s) 약 50배의 데이터를 동 시간 동안 처리할 수 있어요.",
              annotations: {
                bold: true,
                code: false,
                color: "default",
                italic: false,
                underline: false,
                strikethrough: false,
              },
            },
          ],
        },
        created_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        created_time: "2024-07-10T02:47:00.000Z",
        has_children: false,
        last_edited_by: {
          id: "a63a391b-9b23-4d46-8fe6-283c80878a5f",
          object: "user",
        },
        last_edited_time: "2024-07-16T04:45:00.000Z",
      },
      {
        id: "99f5acff-d83c-4c07-bb4c-08a433bde879",
        type: "paragraph",
        object: "block",
        parent: {
          type: "page_id",
          page_id: "39c9162e-949d-472d-b06e-e04cade1ab56",
        },
        archived: false,
        in_trash: false,
        paragraph: {
          color: "default",
          rich_text: [
            {
              href: null,
              text: {
                link: null,
                content:
                  "올해 Nvidia의 비즈니스 포트폴리오를 살펴보면 87%가 데이터 센터 관련 매출이라고 합니다. 이러한 이유로 최근에는 GPU를 설계할 때부터 인공지능 워크로드를 고려하는 경우가 많습니다. 예를 들어, 혼합 정밀도(Mixed Precision) 연산에 특화된 텐서코어를 GPU에 추가함으로써 행렬 곱 연산 속도를 크게 향상 시켰는데요. 이는 딥러닝 모델이 높은 정확도를 유지하면서도 더 빠르게 학습할 수 있도록 돕습니다.",
              },
              type: "text",
              plain_text:
                "올해 Nvidia의 비즈니스 포트폴리오를 살펴보면 87%가 데이터 센터 관련 매출이라고 합니다. 이러한 이유로 최근에는 GPU를 설계할 때부터 인공지능 워크로드를 고려하는 경우가 많습니다. 예를 들어, 혼합 정밀도(Mixed Precision) 연산에 특화된 텐서코어를 GPU에 추가함으로써 행렬 곱 연산 속도를 크게 향상 시켰는데요. 이는 딥러닝 모델이 높은 정확도를 유지하면서도 더 빠르게 학습할 수 있도록 돕습니다.",
              annotations: {
                bold: false,
                code: false,
                color: "default",
                italic: false,
                underline: false,
                strikethrough: false,
              },
            },
          ],
        },
        created_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        created_time: "2024-07-10T02:47:00.000Z",
        has_children: false,
        last_edited_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        last_edited_time: "2024-07-10T03:59:00.000Z",
      },
      {
        id: "c000af21-e4ae-47fe-b55e-d71a8d486f43",
        type: "image",
        image: {
          file: {
            url: "https://static.toss.im/ipd-tcs/toss_core/live/16d48e37-4969-4383-b1cd-6c64e170794d/Untitled.png",
          },
          type: "file",
          caption: [
            {
              href: null,
              text: {
                link: null,
                content: "Nvidia H100 (출처: ",
              },
              type: "text",
              plain_text: "Nvidia H100 (출처: ",
              annotations: {
                bold: false,
                code: false,
                color: "default",
                italic: false,
                underline: false,
                strikethrough: false,
              },
            },
            {
              href: "https://www.nvidia.com/content/dam/en-zz/Solutions/gtcs22/data-center/h100/h100-og.jpg",
              text: {
                link: {
                  url: "https://www.nvidia.com/content/dam/en-zz/Solutions/gtcs22/data-center/h100/h100-og.jpg",
                },
                content:
                  "https://www.nvidia.com/content/dam/en-zz/Solutions/gtcs22/data-center/h100/h100-og.jpg",
              },
              type: "text",
              plain_text:
                "https://www.nvidia.com/content/dam/en-zz/Solutions/gtcs22/data-center/h100/h100-og.jpg",
              annotations: {
                bold: false,
                code: false,
                color: "default",
                italic: false,
                underline: false,
                strikethrough: false,
              },
            },
            {
              href: null,
              text: {
                link: null,
                content: ")",
              },
              type: "text",
              plain_text: ")",
              annotations: {
                bold: false,
                code: false,
                color: "default",
                italic: false,
                underline: false,
                strikethrough: false,
              },
            },
          ],
        },
        object: "block",
        parent: {
          type: "page_id",
          page_id: "39c9162e-949d-472d-b06e-e04cade1ab56",
        },
        archived: false,
        in_trash: false,
        created_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        created_time: "2024-07-10T03:53:00.000Z",
        has_children: false,
        last_edited_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        last_edited_time: "2024-07-10T03:54:00.000Z",
      },
      {
        id: "4439b250-020d-42cb-a07a-18468a95d46d",
        type: "heading_2",
        object: "block",
        parent: {
          type: "page_id",
          page_id: "39c9162e-949d-472d-b06e-e04cade1ab56",
        },
        archived: false,
        in_trash: false,
        heading_2: {
          color: "default",
          rich_text: [
            {
              href: null,
              text: {
                link: null,
                content: "GPU 사용시 유의사항",
              },
              type: "text",
              plain_text: "GPU 사용시 유의사항",
              annotations: {
                bold: false,
                code: false,
                color: "default",
                italic: false,
                underline: false,
                strikethrough: false,
              },
            },
          ],
          is_toggleable: false,
        },
        created_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        created_time: "2024-07-10T02:47:00.000Z",
        has_children: false,
        last_edited_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        last_edited_time: "2024-07-10T03:36:00.000Z",
      },
      {
        id: "cbc874fc-876e-4f98-98b9-f3eaa112edb7",
        type: "paragraph",
        object: "block",
        parent: {
          type: "page_id",
          page_id: "39c9162e-949d-472d-b06e-e04cade1ab56",
        },
        archived: false,
        in_trash: false,
        paragraph: {
          color: "default",
          rich_text: [
            {
              href: null,
              text: {
                link: null,
                content:
                  "이 외에도 GPU는 동일한 연산 작업을 수행할 때 CPU보다 에너지 효율성이 높은 등 다양한 장점이 있어요. 하지만, GPU를 인공지능에 활용하는 데 장점만 있는 것은 아닙니다. 이번 섹션에서는 GPU 사용시 유의해야 하는 점들에 대해서 알아볼게요.",
              },
              type: "text",
              plain_text:
                "이 외에도 GPU는 동일한 연산 작업을 수행할 때 CPU보다 에너지 효율성이 높은 등 다양한 장점이 있어요. 하지만, GPU를 인공지능에 활용하는 데 장점만 있는 것은 아닙니다. 이번 섹션에서는 GPU 사용시 유의해야 하는 점들에 대해서 알아볼게요.",
              annotations: {
                bold: false,
                code: false,
                color: "default",
                italic: false,
                underline: false,
                strikethrough: false,
              },
            },
          ],
        },
        created_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        created_time: "2024-07-10T03:36:00.000Z",
        has_children: false,
        last_edited_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        last_edited_time: "2024-07-10T03:59:00.000Z",
      },
      {
        id: "7f0cc7a0-97ec-4631-aaad-faa03723f897",
        type: "heading_3",
        object: "block",
        parent: {
          type: "page_id",
          page_id: "39c9162e-949d-472d-b06e-e04cade1ab56",
        },
        archived: false,
        in_trash: false,
        heading_3: {
          color: "default",
          rich_text: [
            {
              href: null,
              text: {
                link: null,
                content: "1. 효율적인 데이터 이동",
              },
              type: "text",
              plain_text: "1. 효율적인 데이터 이동",
              annotations: {
                bold: false,
                code: false,
                color: "default",
                italic: false,
                underline: false,
                strikethrough: false,
              },
            },
          ],
          is_toggleable: false,
        },
        created_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        created_time: "2024-07-10T02:47:00.000Z",
        has_children: false,
        last_edited_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        last_edited_time: "2024-07-10T02:47:00.000Z",
      },
      {
        id: "d28ce141-5b35-4681-a049-7adcc77a5e45",
        type: "paragraph",
        object: "block",
        parent: {
          type: "page_id",
          page_id: "39c9162e-949d-472d-b06e-e04cade1ab56",
        },
        archived: false,
        in_trash: false,
        paragraph: {
          color: "default",
          rich_text: [
            {
              href: null,
              text: {
                link: null,
                content:
                  "GPU에서 데이터를 처리하기 위해서는 먼저 CPU에서 GPU로 데이터를 전송해야 합니다. 이 과정에서 데이터 전송 시간이 소요되며, 데이터의 크기가 클수록 전송 시간도 길어집니다. 이는 GPU가 데이터 처리에서는 매우 빠르지만, 데이터 전송 과정에서 병목 현상이 발생할 수 있음을 의미합니다. 따라서, 데이터 전송 시간을 최소화하고 GPU의 성능을 최대한 활용하기 위해 효율적인 데이터 전송 전략이 필요합니다.",
              },
              type: "text",
              plain_text:
                "GPU에서 데이터를 처리하기 위해서는 먼저 CPU에서 GPU로 데이터를 전송해야 합니다. 이 과정에서 데이터 전송 시간이 소요되며, 데이터의 크기가 클수록 전송 시간도 길어집니다. 이는 GPU가 데이터 처리에서는 매우 빠르지만, 데이터 전송 과정에서 병목 현상이 발생할 수 있음을 의미합니다. 따라서, 데이터 전송 시간을 최소화하고 GPU의 성능을 최대한 활용하기 위해 효율적인 데이터 전송 전략이 필요합니다.",
              annotations: {
                bold: false,
                code: false,
                color: "default",
                italic: false,
                underline: false,
                strikethrough: false,
              },
            },
          ],
        },
        created_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        created_time: "2024-07-10T02:47:00.000Z",
        has_children: false,
        last_edited_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        last_edited_time: "2024-07-10T02:47:00.000Z",
      },
      {
        id: "cc432c08-4889-4450-8827-f6e57466cb5e",
        type: "heading_3",
        object: "block",
        parent: {
          type: "page_id",
          page_id: "39c9162e-949d-472d-b06e-e04cade1ab56",
        },
        archived: false,
        in_trash: false,
        heading_3: {
          color: "default",
          rich_text: [
            {
              href: null,
              text: {
                link: null,
                content: "2. 병렬 프로그래밍의 어려움",
              },
              type: "text",
              plain_text: "2. 병렬 프로그래밍의 어려움",
              annotations: {
                bold: false,
                code: false,
                color: "default",
                italic: false,
                underline: false,
                strikethrough: false,
              },
            },
          ],
          is_toggleable: false,
        },
        created_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        created_time: "2024-07-10T02:47:00.000Z",
        has_children: false,
        last_edited_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        last_edited_time: "2024-07-10T02:47:00.000Z",
      },
      {
        id: "8de6d7c4-4726-4cc3-9b5d-62d5c85f19e9",
        type: "paragraph",
        object: "block",
        parent: {
          type: "page_id",
          page_id: "39c9162e-949d-472d-b06e-e04cade1ab56",
        },
        archived: false,
        in_trash: false,
        paragraph: {
          color: "default",
          rich_text: [
            {
              href: null,
              text: {
                link: null,
                content:
                  "GPU는 병렬 처리 능력이 뛰어나지만, 이를 효과적으로 활용하기 위해서는 병렬 프로그래밍 기술이 필요합니다. 병렬 프로그래밍은 전통적인 순차 프로그래밍보다 훨씬 복잡하며, 데이터 분할, 동기화, 레이스 컨디션 등 다양한 문제를 고려해야 합니다. 특히, 병렬 알고리즘을 설계하고 최적화하는 과정에서 많은 시간과 노력이 필요합니다. 이를 해결하기 위해 CUDA와 같은 병렬 프로그래밍 프레임워크가 제공되지만, 여전히 높은 학습 곡선이 존재합니다. ",
              },
              type: "text",
              plain_text:
                "GPU는 병렬 처리 능력이 뛰어나지만, 이를 효과적으로 활용하기 위해서는 병렬 프로그래밍 기술이 필요합니다. 병렬 프로그래밍은 전통적인 순차 프로그래밍보다 훨씬 복잡하며, 데이터 분할, 동기화, 레이스 컨디션 등 다양한 문제를 고려해야 합니다. 특히, 병렬 알고리즘을 설계하고 최적화하는 과정에서 많은 시간과 노력이 필요합니다. 이를 해결하기 위해 CUDA와 같은 병렬 프로그래밍 프레임워크가 제공되지만, 여전히 높은 학습 곡선이 존재합니다. ",
              annotations: {
                bold: false,
                code: false,
                color: "default",
                italic: false,
                underline: false,
                strikethrough: false,
              },
            },
          ],
        },
        created_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        created_time: "2024-07-10T02:47:00.000Z",
        has_children: false,
        last_edited_by: {
          id: "630bd131-d6e9-4ed6-83d6-45dbe0e2f43d",
          object: "user",
        },
        last_edited_time: "2024-07-11T00:19:00.000Z",
      },
      {
        id: "045cb7e4-66b4-439d-9461-984b452eff25",
        type: "paragraph",
        object: "block",
        parent: {
          type: "page_id",
          page_id: "39c9162e-949d-472d-b06e-e04cade1ab56",
        },
        archived: false,
        in_trash: false,
        paragraph: {
          color: "default",
          rich_text: [
            {
              href: null,
              text: {
                link: null,
                content:
                  "특히 복잡도가 올라가는 대표적인 행위가 디버깅입니다. GPU의 이러한 병렬 처리는 순차 처리가 아니기 때문에 오류의 원인을 추적하고 재현하는 것이 어렵습니다. 또한, GPU 디버깅 도구는 CPU 디버깅 도구만큼 성숙하지 않아서 개발자들이 문제를 파악하고 해결하는 데 더 많은 시간과 노력이 필요합니다. 이러한 어려움을 극복하기 위해서는 GPU 디버깅 도구와 기술에 대한 숙련도가 필요합니다.",
              },
              type: "text",
              plain_text:
                "특히 복잡도가 올라가는 대표적인 행위가 디버깅입니다. GPU의 이러한 병렬 처리는 순차 처리가 아니기 때문에 오류의 원인을 추적하고 재현하는 것이 어렵습니다. 또한, GPU 디버깅 도구는 CPU 디버깅 도구만큼 성숙하지 않아서 개발자들이 문제를 파악하고 해결하는 데 더 많은 시간과 노력이 필요합니다. 이러한 어려움을 극복하기 위해서는 GPU 디버깅 도구와 기술에 대한 숙련도가 필요합니다.",
              annotations: {
                bold: false,
                code: false,
                color: "default",
                italic: false,
                underline: false,
                strikethrough: false,
              },
            },
          ],
        },
        created_by: {
          id: "630bd131-d6e9-4ed6-83d6-45dbe0e2f43d",
          object: "user",
        },
        created_time: "2024-07-11T00:19:00.000Z",
        has_children: false,
        last_edited_by: {
          id: "a63a391b-9b23-4d46-8fe6-283c80878a5f",
          object: "user",
        },
        last_edited_time: "2024-07-16T04:46:00.000Z",
      },
      {
        id: "cc33e587-a79a-4bdf-b8ce-81d0095927ba",
        type: "paragraph",
        object: "block",
        parent: {
          type: "page_id",
          page_id: "39c9162e-949d-472d-b06e-e04cade1ab56",
        },
        archived: false,
        in_trash: false,
        paragraph: {
          color: "default",
          rich_text: [
            {
              href: null,
              text: {
                link: null,
                content:
                  "뿐만 아니라 LLM의 경우 다수의 GPU 및 서버를 묶어서 학습을 진행하는 경우가 많습니다. 이러한 경우에는 기존에도 높았던 복잡도가 더욱 더 크게 상승하게 됩니다. ",
              },
              type: "text",
              plain_text:
                "뿐만 아니라 LLM의 경우 다수의 GPU 및 서버를 묶어서 학습을 진행하는 경우가 많습니다. 이러한 경우에는 기존에도 높았던 복잡도가 더욱 더 크게 상승하게 됩니다. ",
              annotations: {
                bold: false,
                code: false,
                color: "default",
                italic: false,
                underline: false,
                strikethrough: false,
              },
            },
          ],
        },
        created_by: {
          id: "630bd131-d6e9-4ed6-83d6-45dbe0e2f43d",
          object: "user",
        },
        created_time: "2024-07-11T00:19:00.000Z",
        has_children: false,
        last_edited_by: {
          id: "630bd131-d6e9-4ed6-83d6-45dbe0e2f43d",
          object: "user",
        },
        last_edited_time: "2024-07-11T00:19:00.000Z",
      },
      {
        id: "60532b7a-7ee9-4cc6-a33c-8ae8b9a724b6",
        type: "heading_3",
        object: "block",
        parent: {
          type: "page_id",
          page_id: "39c9162e-949d-472d-b06e-e04cade1ab56",
        },
        archived: false,
        in_trash: false,
        heading_3: {
          color: "default",
          rich_text: [
            {
              href: null,
              text: {
                link: null,
                content: "3. 아웃라이어에 의한 전체 성능 저하 문제",
              },
              type: "text",
              plain_text: "3. 아웃라이어에 의한 전체 성능 저하 문제",
              annotations: {
                bold: false,
                code: false,
                color: "default",
                italic: false,
                underline: false,
                strikethrough: false,
              },
            },
          ],
          is_toggleable: false,
        },
        created_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        created_time: "2024-07-10T02:47:00.000Z",
        has_children: false,
        last_edited_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        last_edited_time: "2024-07-10T02:47:00.000Z",
      },
      {
        id: "db1f3298-14ac-4229-aac6-bcbd1042dd21",
        type: "paragraph",
        object: "block",
        parent: {
          type: "page_id",
          page_id: "39c9162e-949d-472d-b06e-e04cade1ab56",
        },
        archived: false,
        in_trash: false,
        paragraph: {
          color: "default",
          rich_text: [
            {
              href: null,
              text: {
                link: null,
                content:
                  "고성능 GPU 클러스터에서는 아웃라이어가 하나라도 존재할 경우 성능 병목 현상이 생겨 전체 클러스터의 성능이 저하 될 수 있습니다. 예를 들어 LLM 학습시 주기적으로 모델을 저장해주어야 하는데, 이때 스토리지의 쓰기 성능이 낮으면 모델을 모두 스토리지에 저장하기 전까지는 다른 어떤 작업도 수행 할 수가 없습니다. 이러한 경우는 LLM을 학습하는 대규모 GPU 클러스터에서 매우 빈번하게 발생하는 문제 입니다. 때문에 이를 방지하기 위해 GPU 하드웨어의 균일성을 유지하고, 성능 테스트를 통해 아웃라이어를 식별하고 적절히 조치하는 것이 중요합니다.",
              },
              type: "text",
              plain_text:
                "고성능 GPU 클러스터에서는 아웃라이어가 하나라도 존재할 경우 성능 병목 현상이 생겨 전체 클러스터의 성능이 저하 될 수 있습니다. 예를 들어 LLM 학습시 주기적으로 모델을 저장해주어야 하는데, 이때 스토리지의 쓰기 성능이 낮으면 모델을 모두 스토리지에 저장하기 전까지는 다른 어떤 작업도 수행 할 수가 없습니다. 이러한 경우는 LLM을 학습하는 대규모 GPU 클러스터에서 매우 빈번하게 발생하는 문제 입니다. 때문에 이를 방지하기 위해 GPU 하드웨어의 균일성을 유지하고, 성능 테스트를 통해 아웃라이어를 식별하고 적절히 조치하는 것이 중요합니다.",
              annotations: {
                bold: false,
                code: false,
                color: "default",
                italic: false,
                underline: false,
                strikethrough: false,
              },
            },
          ],
        },
        created_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        created_time: "2024-07-10T02:47:00.000Z",
        has_children: false,
        last_edited_by: {
          id: "630bd131-d6e9-4ed6-83d6-45dbe0e2f43d",
          object: "user",
        },
        last_edited_time: "2024-07-11T00:26:00.000Z",
      },
      {
        id: "5e8c9d93-3097-452d-87b3-836de74f689a",
        type: "paragraph",
        object: "block",
        parent: {
          type: "page_id",
          page_id: "39c9162e-949d-472d-b06e-e04cade1ab56",
        },
        archived: false,
        in_trash: false,
        paragraph: {
          color: "default",
          rich_text: [
            {
              href: null,
              text: {
                link: null,
                content:
                  "이처럼 GPU는 뛰어난 병렬 처리 능력과 고성능 연산 능력을 제공하지만, 이를 효과적으로 활용하기 위해서는 데이터 전송, 병렬 프로그래밍, 자원 활용, 디버깅, 성능 아웃라이어 문제 등 여러 기술 팩터들을 고려해야 합니다. 이러한 요소들은 GPU를 사용할 때 직면할 수 있는 주요 도전 과제들입니다. 이러한 문제들을 이해하고 적절히 대응하는 것은 GPU를 최적화하고, 높은 성능을 유지하는 데 필수적입니다.",
              },
              type: "text",
              plain_text:
                "이처럼 GPU는 뛰어난 병렬 처리 능력과 고성능 연산 능력을 제공하지만, 이를 효과적으로 활용하기 위해서는 데이터 전송, 병렬 프로그래밍, 자원 활용, 디버깅, 성능 아웃라이어 문제 등 여러 기술 팩터들을 고려해야 합니다. 이러한 요소들은 GPU를 사용할 때 직면할 수 있는 주요 도전 과제들입니다. 이러한 문제들을 이해하고 적절히 대응하는 것은 GPU를 최적화하고, 높은 성능을 유지하는 데 필수적입니다.",
              annotations: {
                bold: false,
                code: false,
                color: "default",
                italic: false,
                underline: false,
                strikethrough: false,
              },
            },
          ],
        },
        created_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        created_time: "2024-07-10T02:47:00.000Z",
        has_children: false,
        last_edited_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        last_edited_time: "2024-07-10T02:47:00.000Z",
      },
      {
        id: "07f41d7c-d3f5-4ad3-b2a7-a271772b3388",
        type: "heading_1",
        object: "block",
        parent: {
          type: "page_id",
          page_id: "39c9162e-949d-472d-b06e-e04cade1ab56",
        },
        archived: false,
        in_trash: false,
        heading_1: {
          color: "default",
          rich_text: [
            {
              href: null,
              text: {
                link: null,
                content: "마무리",
              },
              type: "text",
              plain_text: "마무리",
              annotations: {
                bold: false,
                code: false,
                color: "default",
                italic: false,
                underline: false,
                strikethrough: false,
              },
            },
          ],
          is_toggleable: false,
        },
        created_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        created_time: "2024-07-10T02:47:00.000Z",
        has_children: false,
        last_edited_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        last_edited_time: "2024-07-10T02:47:00.000Z",
      },
      {
        id: "07a3b16d-2702-472b-ac0b-cc628565e389",
        type: "paragraph",
        object: "block",
        parent: {
          type: "page_id",
          page_id: "39c9162e-949d-472d-b06e-e04cade1ab56",
        },
        archived: false,
        in_trash: false,
        paragraph: {
          color: "default",
          rich_text: [
            {
              href: null,
              text: {
                link: null,
                content:
                  "오늘은 토스증권이 왜 자체적으로 고성능 GPU 클러스터를 구축하고 있는지에 대해서 설명해드렸고, 고성능 GPU 클러스터를 구축하기 위해 고려해야 할 다양한 기술적 요소들에 대해서도 다루었습니다.",
              },
              type: "text",
              plain_text:
                "오늘은 토스증권이 왜 자체적으로 고성능 GPU 클러스터를 구축하고 있는지에 대해서 설명해드렸고, 고성능 GPU 클러스터를 구축하기 위해 고려해야 할 다양한 기술적 요소들에 대해서도 다루었습니다.",
              annotations: {
                bold: false,
                code: false,
                color: "default",
                italic: false,
                underline: false,
                strikethrough: false,
              },
            },
          ],
        },
        created_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        created_time: "2024-07-10T02:47:00.000Z",
        has_children: false,
        last_edited_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        last_edited_time: "2024-07-10T04:00:00.000Z",
      },
      {
        id: "dc2f779f-7520-4b81-8217-741ca92050ab",
        type: "paragraph",
        object: "block",
        parent: {
          type: "page_id",
          page_id: "39c9162e-949d-472d-b06e-e04cade1ab56",
        },
        archived: false,
        in_trash: false,
        paragraph: {
          color: "default",
          rich_text: [
            {
              href: null,
              text: {
                link: null,
                content:
                  "다음 글에서는 이러한 요소들을 어떻게 관측하고 해결해나갔는지 면밀히 설명해드릴게요.",
              },
              type: "text",
              plain_text:
                "다음 글에서는 이러한 요소들을 어떻게 관측하고 해결해나갔는지 면밀히 설명해드릴게요.",
              annotations: {
                bold: false,
                code: false,
                color: "default",
                italic: false,
                underline: false,
                strikethrough: false,
              },
            },
          ],
        },
        created_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        created_time: "2024-07-10T02:47:00.000Z",
        has_children: false,
        last_edited_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        last_edited_time: "2024-07-10T04:00:00.000Z",
      },
      {
        id: "ed168c5b-16af-4a7a-8869-335d5a9592f9",
        type: "paragraph",
        object: "block",
        parent: {
          type: "page_id",
          page_id: "39c9162e-949d-472d-b06e-e04cade1ab56",
        },
        archived: false,
        in_trash: false,
        paragraph: {
          color: "default",
          rich_text: [],
        },
        created_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        created_time: "2024-07-10T02:47:00.000Z",
        has_children: false,
        last_edited_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        last_edited_time: "2024-07-10T02:47:00.000Z",
      },
    ],
    isPublished: true,
  },
};

export default article;
