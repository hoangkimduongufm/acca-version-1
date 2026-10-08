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
        type: "standard", // Dạng câu hỏi tiêu chuẩn giống Hình 3
        question: "In 2021, SHC JSC, a joint-stock company registered in Vietnam, invested in shares of VNC JSC, a company listed on the Vietnamese stock market, when the share price was VND 12,000 per share. In July 2025, SHC JSC received dividends from VNC JSC in the form of five million bonus shares, when the market price of one share in VNC JSC was VND 15,200. In November 2025, SHC JSC sold four million bonus shares of VNC JSC for VND 15,000 per share. SHC JSC is subject to the standard rate of corporate tax.\n\nWhat is the total corporate income tax (CIT) liability payable by SHC JSC in the fiscal year 2025 on the receipt of the dividend in July 2025 and the sale of the shares in November 2025?",
        options: [
            "VND 2,400 million",
            "VND 15,200 million",
            "VND 12,000 million",
            "VND 3,200 million"
        ],
        correct: 0,
        explanation: "Cổ tức nhận bằng cổ phiếu thưởng chưa phải nộp thuế TNDN tại thời điểm nhận; khi chuyển nhượng cổ phiếu thưởng sẽ tính thuế theo giá bán và giá vốn quy định."
    }
];
