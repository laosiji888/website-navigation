report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\web__0_document_0_tablet.png",
        "test": "..\\bitmaps_test\\20210204-180000\\web__0_document_0_tablet.png",
        "selector": "document",
        "fileName": "web__0_document_0_tablet.png",
        "label": "首页",
        "requireSameDimensions": true,
        "misMatchThreshold": 0.1,
        "url": "http://localhost:7777/",
        "referenceUrl": "",
        "expect": 0,
        "viewportLabel": "tablet",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "4.44",
          "analysisTime": 81
        },
        "diffImage": "..\\bitmaps_test\\20210204-180000\\failed_diff_web__0_document_0_tablet.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\web__0_document_1_phone.png",
        "test": "..\\bitmaps_test\\20210204-180000\\web__0_document_1_phone.png",
        "selector": "document",
        "fileName": "web__0_document_1_phone.png",
        "label": "首页",
        "requireSameDimensions": true,
        "misMatchThreshold": 0.1,
        "url": "http://localhost:7777/",
        "referenceUrl": "",
        "expect": 0,
        "viewportLabel": "phone",
        "error": "Reference file not found F:\\MyFile\\web\\website-navigation\\report\\backstop_data\\bitmaps_reference\\web__0_document_1_phone.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\web_2_0_document_0_tablet.png",
        "test": "..\\bitmaps_test\\20210204-180000\\web_2_0_document_0_tablet.png",
        "selector": "document",
        "fileName": "web_2_0_document_0_tablet.png",
        "label": "首页2",
        "requireSameDimensions": true,
        "misMatchThreshold": 0.1,
        "url": "https://bingoyyy.gitee.io/website-navigation/",
        "referenceUrl": "",
        "expect": 0,
        "viewportLabel": "tablet",
        "error": "Reference file not found F:\\MyFile\\web\\website-navigation\\report\\backstop_data\\bitmaps_reference\\web_2_0_document_0_tablet.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\web_2_0_document_1_phone.png",
        "test": "..\\bitmaps_test\\20210204-180000\\web_2_0_document_1_phone.png",
        "selector": "document",
        "fileName": "web_2_0_document_1_phone.png",
        "label": "首页2",
        "requireSameDimensions": true,
        "misMatchThreshold": 0.1,
        "url": "https://bingoyyy.gitee.io/website-navigation/",
        "referenceUrl": "",
        "expect": 0,
        "viewportLabel": "phone",
        "error": "Reference file not found F:\\MyFile\\web\\website-navigation\\report\\backstop_data\\bitmaps_reference\\web_2_0_document_1_phone.png"
      },
      "status": "fail"
    }
  ],
  "id": "web"
});