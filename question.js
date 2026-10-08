const quizData = [
    {
        id: 1,
        type: "option_table", // Dạng có bảng option giống Hình 1
        question: "KBC Co, a Vietnam company, sold a piece of land on 1 July 2025 for VND80,000 million. The land was originally purchased on 1 January 2021 for VND50,000 million. In addition, KBC Co incurred brokerage fees of VND2,000 million related to the sale with proper documents. KBC Co had a taxable loss from its main operating business of VND25,000 million in the year ended 31 December 2025.\n\nWhat is the total amount of KBC Co's taxable income for corporate income tax purposes, and loss carried forward figure, in the year ended 31 December 2025?",
        optionTable: {
            headers: ["Option", "Taxable income (VND million)", "Loss carried forward (VND million)"],
            rows: [
                ["1", "30,000", "25,000"],
                ["2", "28,000", "25,000"],
                ["3", "3,000", "0"],
                ["4", "5,000", "0"]
            ]
        },
        options: ["Option 3", "Option 4", "Option 2", "Option 1"],
        correct: 0,
        explanation: "Thu nhập chịu thuế từ chuyển nhượng bất động sản = 80,000 - 50,000 - 2,000 = 28,000 triệu. Lỗ hoạt động chính 25,000 triệu được bù trừ vào thu nhập chịu thuế này, do đó thuế thu nhập chịu thuế còn lại sau bù trừ là 3,000 triệu và số lỗ chuyển sang năm sau bằng 0."
    },
    {
        id: 2,
        type: "data_table", // Dạng có bảng dữ liệu đề bài & bảng option giống Hình 2
        question: "ITC Co, a company incorporated in Vietnam, operates in the soft drinks industry. In 2025, the company issued water from its inventory as follows:",
        questionTable: {
            headers: ["Purpose", "Cost value (VND million)"],
            rows: [
                ["For business meetings", "500"],
                ["For employees to drink in the factories while working", "200"],
                ["For further processing into other soft drinks", "1,800"]
            ]
        },
        subQuestion: "What is ITC Co's taxable revenue and deductible expense for corporate income tax (CIT) purposes in relation to the above issuance of inventory for the fiscal year 2025?",
        optionTable: {
            headers: ["Option", "Taxable revenue", "Deductible expense"],
            rows: [
                ["Option 1", "VND 0 million", "VND 2,500 million"],
                ["Option 2", "VND 200 million", "VND 2,500 million"],
                ["Option 3", "VND 200 million", "VND 2,300 million"],
                ["Option 4", "VND 0 million", "VND 2,300 million"]
            ]
        },
        options: ["Option 1", "Option 2", "Option 3", "Option 4"],
        correct: 2,
        explanation: "Chi tiết tính toán doanh thu tính thuế và chi phí được trừ phù hợp với quy định thuế TNDN hiện hành."
    },
    {
        id: 3,
        type: "statements_list",
        question: "Which of the following statements are correct in relation to the tax audit process undertaken by the tax authority?",
        statements: [
            "(1) In cases where the tax authority detects activities of tax evasion by a taxpayer during a tax audit, the tax audit team shall report the case to the police for investigation and notify the head of the tax authority",
            "(2) In cases of tax evasion, the head of the tax authority can conduct a more thorough tax inspection",
            "(3) The tax audit process at the taxpayer's premises is recorded in an electronic logbook"
        ],
        options: [
            "1, 2 and 3",
            "1 and 2 only",
            "2 and 3 only",
            "1 and 3 only"
        ],
        correct: 3, // Tương ứng với D
        explanation: "Giải thích chi tiết về quy trình thanh tra thuế và các trường hợp chuyển cơ quan công an hoặc kiểm tra kỹ hơn..."
    }
];
