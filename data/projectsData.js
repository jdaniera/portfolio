export const projectsData = [
    {
      image: "/images/onward/transcription.png",
      title: "Onward",
      type: "case study",
      role: ["UX Researcher", "Developer"],
      summary: "Conducted user research and built a mock interview web-app using Next.js and ChakraUI",
      link: "/projects/`${project.title}`",
      linkTitle: "Try Onward",
      sections:[
        {
          heading: 'Research',
          paragraphs: [
            'Did you know? Canada faces a critical healthcare labor shortage, with an estimated 60,000 nurses needed by 2030 [1]. Internationally Educated Nurses (IENs) are essential to meeting this demand, making up 12% of the nursing workforce [2]. However, many IENs encounter significant challenges in securing roles that match their qualifications.',
            'IENs bring diverse education and experience, but credential recognition and licensing barriers prevent many from advancing into appropriate positions. According to the Ontario Office of the Fairness Commissioner, only 17.5% of foreign-born or educated nurses in Ontario are employed at or above their skill level, compared to 64% of Canadian-born nurses [3]. This gap highlights systemic issues such as employer bias, preference for Canadian experience, and communication challenges.',
            'In addition, performance anxiety can be a significant barrier during the job interview process. Many IENs face cultural differences and language barriers, which can heighten anxiety when trying to effectively articulate their skills and experiences. This anxiety, combined with high-stakes pressure, can lead to underperformance, further reducing their chances of securing positions that align with their expertise. [4][5][6]',
            'Currently, only 34% of employed IENs nationwide work as registered nurses, while 21% hold lower-skilled roles like nurse aides and patient service associates [7]. Immigrants are overrepresented in these lower-skilled healthcare positions, making up 22% of the workforce compared to 16% of the overall employed population [8].',
            'To better understand these challenges, surveys were conducted with both Internationally Educated Nurses (IENs) and locally trained nurses in Vancouver. Including both groups provided a comparison of general interview challenges with the unique barriers faced by IENs, such as communication struggles and employer bias.'
          ],
          image: '/images/research-image.png',
          imagePlacementAfterParagraph: 1,
          chart: 'employmentDistributionChart',
        },
        {
          heading: 'Solution',
          paragraphs: [
            'ONWARD aims to bridge this gap by empowering IENs to effectively showcase their skills and qualifications.',
            'Through personalized interview coaching, actionable feedback, and tools to build confidence and reduce anxiety, ONWARD helps IENs overcome barriers such as communication challenges, performance anxiety, and employer bias, ultimately enabling them to secure roles that fully reflect their expertise and potential.',
            'App Values & Key Features in image'
          ],
          image: '/images/research-image.png',
          imagePlacementAfterParagraph: 1,
          chart: 'employmentDistributionChart',
        },
        {
          heading: 'Design',
          paragraphs: [
            'The ONWARD dashboard is designed to be simple and intuitive, making it easy for nurses to access the features they need.',
            '',
            'The colour scheme is thoughtfully derived from real healthcare scenes – the soft colours of nurses scrubs. [add img]'
          ],
          image: '/images/research-image.png',
          imagePlacementAfterParagraph: 1,
          chart: 'employmentDistributionChart',
        },
        {
          paragraphs: [
            'As a mobile supplement, ONWARD offers some calming exercises nurses can use to stay grounded before their interview.'
          ]
        },
        {
          heading: 'Development',
          paragraphs: [
            ''
          ]
        },
        {
          heading: 'Challenges',
          paragraphs: [
            ''
          ]
        },
        {
          heading: 'Lessons Learned',
          paragraphs: [
            ''
          ]
        },
      ]
    },
    {
      image: "/images/fairshare/cover.png",
      title: "FairShare",
      role: "U/UX Designer",
      summary: "Designed an expense tracker mobile app with bill splitting capabilities.",
      link: "/projects/project-two",
    },
    {
      image: "/images/fairshare/cover.png",
      title: "Neighbourly",
      role: "U/UX Designer",
      summary: "Designed a community-based service marketplace mobile app",
      link: "/projects/project-two",
    },
    {
      image: "/images/neighbourly/cover.png",
      title: "Neighbourly",
      role: "UI/UX Designer, Front-End Developer",
      summary: "Redesigned the BCIT Marketing Association website on Squarespace",
      link: "/projects/project-three",
    },
  ];