const companiesData = [
  {
    id: 1,
    name: "苹果公司",
    description: "全球领先的科技创新企业，专注于消费电子产品、软件和服务。",
    logo: "https://www.bp.com/apps/settings/wcm/designs/refresh/bp/images/navigation/bp-logo.svg",
    awards: [
      {
        title: "最具创新力企业奖",
        content: "在人工智能和可穿戴设备领域的突破性进展",
        date: "2023-05-15",
        photo: "https://www.bp.com/content/dam/bp/business-sites/en/global/corporate/images-jpg-png/news-and-insights/bp-magazine/eif-biofuels-sugarcane-harvesting.jpg.img.500.medium.jpg"
      }
    ]
  },
  {
    id: 101,
    name: "阿里巴巴集团",
    description: "全球领先的电子商务和科技公司。",
    logo: "https://www.bp.com/apps/settings/wcm/designs/refresh/bp/images/navigation/bp-logo.svg",
    awards: [
      {
        title: "数字商业创新奖",
        content: "在电子商务领域的创新成就",
        date: "2023-09-01",
        photo: "https://www.bp.com/content/dam/bp/business-sites/en/global/corporate/images-jpg-png/news-and-insights/bp-magazine/eif-biofuels-sugarcane-harvesting.jpg.img.500.medium.jpg"
      }
    ]
  },
  {
    id: 102,
    name: "中国建设银行",
    description: "中国领先的商业银行之一。",
    logo: "https://www.bp.com/apps/settings/wcm/designs/refresh/bp/images/navigation/bp-logo.svg",
    awards: [
      {
        title: "普惠金融服务奖",
        content: "在普惠金融服务方面的卓越贡献",
        date: "2023-09-15",
        photo: "https://www.bp.com/content/dam/bp/business-sites/en/global/corporate/images-jpg-png/news-and-insights/bp-magazine/eif-biofuels-sugarcane-harvesting.jpg.img.500.medium.jpg"
      }
    ]
  },
  {
    id: 103,
    name: "中国移动通信",
    description: "全球最大的移动通信运营商。",
    logo: "https://www.bp.com/apps/settings/wcm/designs/refresh/bp/images/navigation/bp-logo.svg",
    awards: [
      {
        title: "5G网络建设奖",
        content: "在5G网络建设方面的领先成就",
        date: "2023-09-20",
        photo: "https://www.bp.com/content/dam/bp/business-sites/en/global/corporate/images-jpg-png/news-and-insights/bp-magazine/eif-biofuels-sugarcane-harvesting.jpg.img.500.medium.jpg"
      }
    ]
  },
  {
    id: 104,
    name: "中国平安保险",
    description: "领先的综合性金融服务集团。",
    logo: "https://www.bp.com/apps/settings/wcm/designs/refresh/bp/images/navigation/bp-logo.svg",
    awards: [
      {
        title: "金融科技创新奖",
        content: "在保险科技领域的创新应用",
        date: "2023-09-25",
        photo: "https://www.bp.com/content/dam/bp/business-sites/en/global/corporate/images-jpg-png/news-and-insights/bp-magazine/eif-biofuels-sugarcane-harvesting.jpg.img.500.medium.jpg"
      }
    ]
  },
  {
    id: 105,
    name: "京东集团",
    description: "中国领先的电商和供应链基础设施服务商。",
    logo: "https://www.bp.com/apps/settings/wcm/designs/refresh/bp/images/navigation/bp-logo.svg",
    awards: [
      {
        title: "智慧物流创新奖",
        content: "在智能物流领域的突破性发展",
        date: "2023-09-30",
        photo: "https://www.bp.com/content/dam/bp/business-sites/en/global/corporate/images-jpg-png/news-and-insights/bp-magazine/eif-biofuels-sugarcane-harvesting.jpg.img.500.medium.jpg"
      }
    ]
  },
  {
    id: 106,
    name: "中国中车",
    description: "全球最大的轨道交通设备制造商。",
    logo: "https://www.bp.com/apps/settings/wcm/designs/refresh/bp/images/navigation/bp-logo.svg",
    awards: [
      {
        title: "轨道交通创新奖",
        content: "在高铁技术创新方面的卓越成就",
        date: "2023-10-05",
        photo: "https://www.bp.com/content/dam/bp/business-sites/en/global/corporate/images-jpg-png/news-and-insights/bp-magazine/eif-biofuels-sugarcane-harvesting.jpg.img.500.medium.jpg"
      }
    ]
  },
  {
    id: 107,
    name: "比亚迪股份",
    description: "全球领先的新能源汽车制造商。",
    logo: "https://www.bp.com/apps/settings/wcm/designs/refresh/bp/images/navigation/bp-logo.svg",
    awards: [
      {
        title: "新能源汽车技术奖",
        content: "在电动汽车技术创新方面的突出贡献",
        date: "2023-10-10",
        photo: "https://www.bp.com/content/dam/bp/business-sites/en/global/corporate/images-jpg-png/news-and-insights/bp-magazine/eif-biofuels-sugarcane-harvesting.jpg.img.500.medium.jpg"
      }
    ]
  },
  {
    id: 108,
    name: "美团点评",
    description: "中国领先的生活服务电子商务平台。",
    logo: "https://www.bp.com/apps/settings/wcm/designs/refresh/bp/images/navigation/bp-logo.svg",
    awards: [
      {
        title: "本地生活服务创新奖",
        content: "在即时配送服务领域的创新成就",
        date: "2023-10-15",
        photo: "https://www.bp.com/content/dam/bp/business-sites/en/global/corporate/images-jpg-png/news-and-insights/bp-magazine/eif-biofuels-sugarcane-harvesting.jpg.img.500.medium.jpg"
      }
    ]
  },
  {
    id: 109,
    name: "小米科技",
    description: "全球领先的消费电子和智能制造企业。",
    logo: "https://www.bp.com/apps/settings/wcm/designs/refresh/bp/images/navigation/bp-logo.svg",
    awards: [
      {
        title: "智能硬件创新奖",
        content: "在智能家居生态系统建设方面的创新成就",
        date: "2023-10-20",
        photo: "https://www.bp.com/content/dam/bp/business-sites/en/global/corporate/images-jpg-png/news-and-insights/bp-magazine/eif-biofuels-sugarcane-harvesting.jpg.img.500.medium.jpg"
      }
    ]
  },
  {
    id: 110,
    name: "字节跳动",
    description: "全球领先的科技公司，专注于信息和娱乐平台。",
    logo: "https://www.bp.com/apps/settings/wcm/designs/refresh/bp/images/navigation/bp-logo.svg",
    awards: [
      {
        title: "内容创新平台奖",
        content: "在短视频和信息流创新方面的突出表现",
        date: "2023-10-25",
        photo: "https://www.bp.com/content/dam/bp/business-sites/en/global/corporate/images-jpg-png/news-and-insights/bp-magazine/eif-biofuels-sugarcane-harvesting.jpg.img.500.medium.jpg"
      }
    ]
  }
];

export default companiesData;
