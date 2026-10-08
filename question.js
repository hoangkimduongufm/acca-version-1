const quizData = [
    {
        id: 1,
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
        correct: 2,
        explanation: "\nAccording to Article 72.5(e) of Circular 80/2022, in cases where the tax audit team detects tax evasion activity by the taxpayer, they should report to the head of the tax office in charge. The head shall determine whether they should conduct a tax inspection, or transfer the case to the police for investigation. \n“Điều 72. Kiểm tra tại trụ sở người nộp thuế \n5. Trình tự, thủ tục kiểm tra thuế tại trụ sở người nộp thuế \ne) Xử lý kết quả kiểm tra thuế \ne.2) Trường hợp qua kiểm tra thuế mà phát hiện hành vi vi phạm về thuế có dấu hiệu trốn thuế, gian lận về thuế thì trong thời hạn 05 ngày làm việc kể từ ngày kết thúc kiểm tra, đoàn kiểm tra có trách nhiệm báo cáo Thủ trưởng cơ quan thuế để xem xét tiến hành thanh tra hoặc chuyển hồ sơ kiểm tra sang cơ quan điều tra theo quy định của pháp luật.”"
    },
    {
        id: 2,
        type: "statements_list",
        question: "Which of the following statements are correct regarding the treatment of overpaid tax to the State Budget?",
        statements: [
            "(1) The taxpayer may offset the overpaid tax against their tax liabilities or claim a refund",
            "(2) The maximum period for offsetting and claiming a tax refund is five years from the overpayment",
            "(3) In cases where the taxpayer does not offset or claim a refund for the overpaid tax within the specified period in the regulations, the tax authority would inform the taxpayers directly or publicly announce the overpaid tax"
        ],
        options: [
            "1, 2 and 3",
            "2 and 3 only",
            "1 and 3 only",
            "1 and 2 only"
        ],
        correct: 0,
        explanation: "According to Article 71 and 72 of Circular 80/2022, tax authorities shall base their audit plan on the risk assessment of the taxpayers to select the target for the tax audit (which can be at the ffice of the tax authorities or the taxpayer premises). Only taxpayers with HIGH risk would be elected for a tax audit at the tax authorities' office (which can then be extended to an audit at the axpayer's office if needed).\nĐiều 71. Kiểm tra hồ sơ thuế tại trụ sở cơ quan thuế\n1. Phân loại hồ sơ thuế:\nHồ sơ thuế được phân loại thành 03 mức độ rủi ro: Rủi ro thấp, rủi ro trung bình, rủi ro cao.\n2. Cơ quan thuế đề xuất kế hoạch kiểm tra hồ sơ thuế tại trụ sở cơ quan thuế hoặc xử lý theo quy định tại khoản 3, khoản 4 Điều này đối với hồ sơ có rủi ro cao."
    },
    {
        id: 3,
        type: "statements_list",
        question: "Which of the following statements are correct in relation to the procedures for tax audits by the tax authority?",
        statements: [
            "(1) The tax authority shall develop their tax audit plan based on their risk assessment of the taxpayer",
            "(2) A tax audit can be conducted at the tax authority office or at the premises of the taxpayer",
            "(3) Taxpayers who are classified as medium and high risk will be selected for a tax audit at the tax authority office and at the premises of the taxpayer, respectively"
        ],
        options: [
            "1, 2 and 3",
            "1 and 2 only",
            "1 and 3 only",
            "2 and 3 only"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 4,
        type: "standard",
        question: "LPI Co is a Vietnamese company. In the year 2024, when reviewing the tax returns of previous years, the company identified that its corporate income tax return in the year ended 31 December 2023 underdeclared income.\n\nThe company declared and paid tax on the under declaration in full on 1 November 2024.\n\nWhat is the basis period for calculating the late payment interest of LPI Co in relation to the scenario outlined, according to Circular 80/2021?",
        options: [
            "From 1 April to 1 November 2024",
            "From 1 April to 31 October 2024",
            "From 2 April to 31 October 2024",
            "From 31 March to 1 November 2024"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 5,
        type: "statements_list",
        question: "Article 5.1 of Circular 80/2021 defines various roles and responsibilities of the \"direct supervising tax authority\".\n\nWhich of the following statements correctly describe some of the roles and responsibilities of the direct supervising tax authority, as defined in Circular 80/2021?",
        statements: [
            "(1) Receiving a tax declaration from a supervised taxpayer",
            "(2) Determining the tax penalty applicable on a supervised taxpayer",
            "(3) Providing guidance to a taxpayer for paying tax to the State Budget",
            "(4) Conducting tax inspections on a taxpayer as required"
        ],
        options: [
            "1 and 4 only",
            "1, 2 and 3 only",
            "1, 2, 3 and 4",
            "2 and 4 only"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 6,
        type: "statements_list",
        question: "Which of the following is/are the exchange rates that a taxpayer can use to convert transactional revenue and costs denominated in foreign currency for tax purposes in Vietnam?",
        statements: [
            "(1) The actual transaction exchange rates stipulated in the accounting regulations",
            "(2) The exchange rates provided by the commercial banks with which the taxpayer has the transactions",
            "(3) The exchange rates published by the State Bank of Vietnam"
        ],
        options: [
            "1 only",
            "1, 2 and 3",
            "2 only",
            "2 and 3 only"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 7,
        type: "statements_list",
        question: "Which of the following is/are the correct definition(s) of “tax risks” that should be subject to risk management according to the Law on Tax Administration of 2019?",
        statements: [
            "(1) Risk of tax officers under-assessing the tax and/or penalties applicable to taxpayers",
            "(2) Risk of non-compliance by taxpayers that may result in loss of tax collection to the State Budget",
            "(3) Risk that tax regulations cannot cover all cases that may occur in practice resulting in a loss of tax collection to the State Budget"
        ],
        options: [
            "2 and 3 only",
            "1, 2 and 3",
            "2 only",
            "1 and 3 only"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 8,
        type: "statements_list",
        question: "Under Article 50 of the Law on Tax Administration in 2019, in which of the following cases can the tax authority impose tax on taxpayers?",
        statements: [
            "(1) A taxpayer does not submit supplement documents with the tax declaration as required by the tax authority",
            "(2) A taxpayer does not fully settle the tax liability and penalty arising from a tax inspection decision made by the tax authority on time, as the taxpayer disagrees with the outcome of the inspection",
            "(3) The taxpayer appeals against the tax authorities' inspection decision to a higher-level authority"
        ],
        options: [
            "1 and 3",
            "1 only",
            "2 and 3",
            "1 and 2"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 9,
        type: "statements_list",
        question: "Which of the following levies and fees are collected by the tax authorities, according to the Law on Tax Administration of 2019?",
        statements: [
            "(1) Land use fee",
            "(2) Water surface rental fee",
            "(3) Fees for mineral resources exploitation",
            "(4) Administrative penalty for tax violations"
        ],
        options: [
            "4 only",
            "1, 2, 3 and 4",
            "1, 2 and 3 only",
            "2, 3 and 4 only"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 10,
        type: "standard",
        question: "Article 9 of the Law on Tax Administration in 2019 sets out the principles of 'risk-based management' in tax management.\n\nWhich of the following statements is CORRECT in relation to 'risk-based tax management'?",
        options: [
            "The tax authorities are responsible for ensuring full compliance by all taxpayers with the tax regulations by conducting regular tax examinations and inspections",
            "The tax authorities are required to apply 'risk-based management' within the tax enforcement process only",
            "Taxpayers are required to self-assess their tax risks and report their risk to the tax authorities for recording and for subsequent review and inspection",
            "The tax authorities assess the level of compliance of taxpayers, classify the risk level of taxpayer compliance and use the result to apply appropriate tax administration measures"
        ],
        correct: 3,
        explanation: ""
    },
    {
        id: 11,
        type: "standard",
        question: "Article 57 of the Law on Tax Administration in 2019 stipulates the order for settlements of tax and liabilities arising during the year which are payable to the State Budget.\n\nWhat is the correct order for settlement of those liabilities?",
        options: [
            "Tax liabilities, tax penalty, late payment interest",
            "Late payment interest, tax penalty, tax liabilities",
            "Tax penalty, late payment interest, tax liabilities",
            "Tax liabilities, late payment interest, tax penalty"
        ],
        correct: 3,
        explanation: ""
    },
    {
        id: 12,
        type: "standard",
        question: "The currency to be used for tax declaration and payment in Vietnam is stated in Article 7 of the 2019 Law on Tax Administration.\n\nWhich of the following statements correctly describes the currency to be used for tax declaration and payment?",
        options: [
            "The currency for tax declaration and payment is Vietnamese Dong",
            "The currency for tax declaration and payment is Vietnamese Dong, except for cases where other foreign currencies are allowed by the tax authorities",
            "The currency for tax declaration and payment is Vietnamese Dong, except for cases where other freely convertible foreign currencies are allowed as stipulated by the Ministry of Finance",
            "The currency for tax declaration is Vietnamese Dong, except for cases where other freely convertible foreign currencies are allowed by the General Department of Taxation. Tax payments can be made in any currency"
        ],
        correct: 2,
        explanation: ""
    },
    {
        id: 13,
        type: "standard",
        question: "TFC Co is a Vietnamese company. Its records showed that by the end of 2024, the following amounts were owed by the company:\n(i) VND10,000 million corporate income tax liabilities\n(ii) VND2,500 million late payment interest\n(iii) VND2,800 million penalty for tax under-declaration\n(iv) VND100 million administrative penalty for violation of tax regulations\n(v) VND800 million land rental to the State Budget\n\nWhat amount should TFC Co pay to be viewed as having 'fulfilled its tax obligations' under the Law on Tax Administration of 2019?",
        options: [
            "VND15,400 million",
            "VND10,000 million",
            "VND16,200 million",
            "VND15,300 million"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 14,
        type: "standard",
        question: "On 30 June 2024, STG Co, a Vietnamese company, identified the value added tax (VAT) declaration it made for April 2024 was under-declared by VND1,000 million. It should be noted that 21 May 2024 was a Monday, and there had been no tax audit at STG Co in 2024.\n\nWhat is the late payment interest (in VND) which STG Co is required to settle on 30 June 2024, assuming the under-declared value added tax (VAT) was settled on that date?",
        options: [
            "VND12,300,000",
            "VND15,000,000",
            "VND20,000,000",
            "VND12,000,000"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 15,
        type: "standard",
        question: "What is the late payment penalty rate per day?",
        options: [
            "10%",
            "20%",
            "0.03%",
            "0.05%"
        ],
        correct: 2,
        explanation: ""
    },
    {
        id: 16,
        type: "statements_list",
        question: "Which of the following cases that are inspected by tax authorities?",
        statements: [
            "(1) At the request of tax administration on the basis of the results of risk classification in tax administration",
            "(2) Taxpayers who have signs of violation of tax law",
            "(3) Taxpayers who are complained or denounced",
            "(4) Taxpayers who are inspected according to the request of competent authorities"
        ],
        options: [
            "(1) & (2) and (3) only",
            "(2) & (3) and (4) only",
            "(1) & (3) and (4) only",
            "(1), (2), (3) and (4)"
        ],
        correct: 3,
        explanation: ""
    },
    {
        id: 17,
        type: "option_table",
        question: "ICTV Co is a Vietnamese company headquartered in Hanoi and has two manufacturing dependent branches in Vinh Phuc and Dong Nai.\nIn the fiscal year ending 31 December 2024, the branch in Dong Nai is entitled to a tax exemption incentive. The headquarters and the branch in Vinh Phuc are not entitled to any tax incentives.\nWhich one of the following options is correct in terms of ICTV Co filing its corporate income tax finalization declaration for the fiscal year 2024 under Circular 80/2021?",
        optionTable: {
            headers: ["Option", "Hanoi Tax Authority", "Vinh Phuc Tax Authority", "Dong Nai Tax Authority"],
            rows: [
                ["1", "Declaration for entire operations", "No declaration required", "Declaration for incentivised activities"],
                ["2", "Declaration for operations of headquarters and Vinh Phuc", "No declaration required", "Declaration for incentivised activities"],
                ["3", "Declaration for entire operations", "Declaration for the branch's activities", "Declaration for the branch's activities"],
                ["4", "Declaration for headquarters operations", "Declaration for the branch's activities", "Declaration for the branch's activities"]
            ]
        },
        options: ["Option 3", "Option 2", "Option 4", "Option 1"],
        correct: 1, // Tương ứng với đáp án B (Option 2)
        explanation: ""
    },
    {
        id: 18,
        type: "standard",
        question: "The tax authority is NOT entitled to impose tax in the following cases",
        options: [
            "The taxpayer fails to provide supplementary documents at the request of the tax authority",
            "The taxpayer is suspected of making a giveaway or liquidating assets to avoid tax liability",
            "The taxpayer fails to apply for tax registration",
            "The taxpayer fails to comply with the tax inspection decision within 10 days from the date of signing (except for cases of postponement as regulated)"
        ],
        correct: 0, // Lưu ý: Tùy theo đáp án chính xác của bạn có thể điều chỉnh lại chỉ số index của mảng options (0 ứng với A, 1 ứng với B, v.v.)
        explanation: ""
    },
    {
        id: 19,
        type: "option_table",
        question: "HQB Co is a Vietnamese company headquartered in Hai Phong, with a dependent branch in Long An and a manufacturing facility in Binh Duong.\nThe branch in Long An had a sales function and registered for invoices and input/output value added tax (VAT) with Long An's Tax Department.\nThe facility in Binh Duong is a purely dependent manufacturing unit with neither a sales function, nor revenue from sales.\nWhich one of the following options indicate the appropriate tax authorities to whom HQB Co is required to submit VAT declarations on the operations of its branch and facility according to Circular 80/2021?",
        optionTable: {
            headers: ["Option", "Branch", "Facility"],
            rows: [
                ["1", "Long An", "Hai Phong"],
                ["2", "Hai Phong", "Hai Phong"],
                ["3", "Hai Phong", "Binh Duong"],
                ["4", "Long An", "Binh Duong"]
            ]
        },
        options: ["Option 1", "Option 2", "Option 3", "Option 4"],
        correct: 3, // Tương ứng với đáp án D (Option 4)
        explanation: ""
    },
    {
        id: 20,
        type: "standard",
        question: "The following cases of inspection at the taxpayer's premises is not correct?",
        options: [
            "Inspections to settle complaints and lawsuits",
            "If the tax refund is under the case of examination before refund",
            "Unscheduled inspections when taxpayers are suspected of committing tax offenses",
            "Inspections at the request of the State Audit Office of Vietnam"
        ],
        correct: 0, // Lưu ý: Tùy theo đáp án chính xác của bạn có thể điều chỉnh lại chỉ số index của mảng options (0 ứng với A, 1 ứng với B, v.v.)
        explanation: ""
    },
    {
        id: 21,
        type: "standard_list",
        question: "PRM Co is a Vietnamese company which manufactures consumer goods (subject to value added tax (VAT) at the rate of 10%).\nOn 30 June 2025, the company issued the following goods for free:",
        items: [
            "Goods with a total market selling price of VND330 million (exclusive of VAT) to customers under a promotion program, which has not been registered with the authorities",
            "Goods with a total market selling price (exclusive of VAT) of VND660 million to its employees partially in lieu of salary"
        ],
        subQuestion: "What is the amount of output VAT which PRM Co should declare in its VAT return for June 2025?",
        options: [
            "VND33 million",
            "VND66 million",
            "VND99 million",
            "VND0"
        ],
        correct: 2, // Tương ứng với đáp án C (VND99 million)
        explanation: ""
    },
    {
        id: 22,
        type: "option_table",
        question: "MRG Co borrowed VND 50,000 million from a bank. The loan was secured against MRG Co's inventory.\nIn October 2025, MRG Co became insolvent and handed over the inventory to the bank to fully settle the loan and interest. The bank then sold the inventory for VND 57,200 million.\nMRG Co originally purchased the inventory for VND 55,000 million in January 2025.\nThe inventory is subject to value-added tax (VAT) at 10%. All amounts are inclusive of VAT, if applicable.\nWhat is the amount of output value-added tax (VAT) and invoicing requirement for MRG Co as a result of handing the inventory over to the bank in settlement of the loan?",
        optionTable: {
            headers: ["Option", "Output VAT", "Invoice issuance by MRG Co"],
            rows: [
                ["1", "VND 5,000 million", "VAT invoice is required"],
                ["2", "VND 5,200 million", "VAT invoice is required"],
                ["3", "0", "VAT invoice with 0 VAT is required"],
                ["4", "0", "VAT invoice NOT required"]
            ]
        },
        options: ["Option 1", "Option 2", "Option 3", "Option 4"],
        correct: 0, // Lưu ý: Điều chỉnh lại chỉ số đúng của đáp án nếu cần (0 tương ứng với Option 1)
        explanation: ""
    },
    {
        id: 23,
        type: "option_table",
        question: "In the year 2025, MLK Co, a Vietnamese company which applies the deduction method for value added tax (VAT) purposes, received compensation by bank transfer of VND1,500 million from an insurance company for damage to goods caused by a flood. According to the insurance policy, the compensation does NOT cover any VAT on the purchase of the goods.\nThe insured goods were purchased by MILK Co for VND2,200 million (exclusive of VAT at the rate of 10%).\nWhat is the amount of creditable input VAT (in VND millions) that MLK Co is required to declare in the year 2025 as a result of the transactions?",
        optionTable: {
            headers: ["Option", "Creditable Input VAT (VND million)"],
            rows: [
                ["A", "200"],
                ["B", "0"],
                ["C", "220"],
                ["D", "0"]
            ]
        },
        options: ["Option A", "Option B", "Option C", "Option D"],
        correct: 0, // Lưu ý: Điều chỉnh lại chỉ số đáp án đúng nếu cần (0 tương ứng với Option A)
        explanation: ""
    },
    {
        id: 24,
        type: "standard",
        question: "In the year 2025, STF Co, a Vietnamese trading company, had the following balances:\n- An account receivable of VND583 million due from its customer, CM Co; and\n- An account payable of VND792 million due to its supplier, NCC Co.\nSTF Co agreed a tri-party agreement by which it instructed CM Co to pay the VND583 million to NCC Co (accompanied by proper supporting documents), and it then settled the remaining amount due of VND209 million to NCC Co in cash.\nAll the amounts are inclusive of value added tax (VAT) at 10%.\nWhat is the amount of STF Co's creditable input VAT as a result of the above transactions?",
        options: [
            "VND53 million",
            "VND19 million",
            "VND0",
            "VND72 million"
        ],
        correct: 0, // Lưu ý: Điều chỉnh lại chỉ số đáp án đúng nếu cần (0 tương ứng với A)
        explanation: ""
    },
    {
        id: 25,
        type: "standard",
        question: "In June 2025, MBF Co, a Vietnamese company, collected proceeds of VND19,800 million (inclusive of value added tax (VAT) at 10%) from selling its products on a cash-on-delivery basis. The company issued gift coupons, valued at VND1,100 million, to the buyers of these goods, under a promotion campaign registered with the authorities.\nWhat is the total output VAT payable by MBF Co to the tax authorities in June 2025?",
        options: [
            "VND1,980 million",
            "VND1,800 million",
            "VND1,910 million",
            "VND1,900 million"
        ],
        correct: 1, // Lưu ý: Điều chỉnh lại chỉ số đáp án đúng nếu cần (1 tương ứng với đáp án B)
        explanation: ""
    },
    {
        id: 26,
        type: "standard",
        question: "VTRAVEL Co entered into a contract with a Singapore company to organise a six-day tour in Vietnam for 40 Singaporean tourists for USD80,000 in total. All costs (including value added tax (VAT)) in Vietnam for the tour are borne by VTRAVEL Co. The total cost for a two-way airfare between Singapore and Vietnam is USD10,000.\nWhat is the total taxable amount for the calculation of output VAT to be charged by VTRAVEL Co on the above contract? Note: Tourism activities are subject to a 10% VAT rate.",
        options: [
            "VND1,709.09 million",
            "VND1,880.00 million",
            "VND1,686.36 million",
            "VND1,645.00 million"
        ],
        correct: 0, // Lưu ý: Điều chỉnh lại chỉ số đáp án đúng nếu cần
        explanation: ""
    },
    {
        id: 27,
        type: "standard",
        question: "IPV Co, a Vietnamese company located in an industrial zone producing value-added tax (VAT) taxable goods, incurred the following costs in relation to the construction of premises completed in 2025:\n- Canteen for employees in its factory inside the industrial zone - cost VND1,650 million\n- Dormitory for its employees inside the industrial zone - cost VND5,500 million\n- Medical station for its employees inside the industrial zone where the employees and their family can have medical checks for free - cost VND4,730 million\nAll costs are inclusive of VAT at 10% and are supported by proper invoices.\nWhat amount of creditable input VAT should IPV Co declare in its 2025 VAT return?",
        options: [
            "VND0 million",
            "VND580 million",
            "VND1,080 million",
            "VND650 million"
        ],
        correct: 0, // Lưu ý: Điều chỉnh lại chỉ số đáp án đúng nếu cần
        explanation: ""
    },
    {
        id: 28,
        type: "standard",
        question: "OPV Co, a Vietnamese company, issued the following goods (which are subject to the 10% rate of value added tax (VAT)) on 31 December 2025:\n- Goods, which have a normal total selling price of VND220 million, were given to employees as a year-end bonus;\n- Goods, which have a normal total selling price of VND300 million, were given to a customer for free as part of a sales promotion that has been registered with the authorities.\nThe above amounts are stated exclusive of VAT.\nWhat is the amount of output VAT which OPV Co should declare on its December 2025 VAT return?",
        options: [
            "VND22 million",
            "VND0 million",
            "VND52 million",
            "VND30 million"
        ],
        correct: 0, // Lưu ý: Điều chỉnh lại chỉ số đáp án đúng nếu cần
        explanation: ""
    },
    {
        id: 29,
        type: "standard",
        question: "In 2025, CPR Co, a company incorporated in Vietnam, purchased a four-seated car for the Deputy General Director. The quoted price of the car was VND 1,980 million (inclusive of value added tax (VAT)). CPR Co obtained a 15% discount off the quoted price from the car dealer. The sales invoice from the dealer shows both the quoted price and the discount.\nWhat is the amount of creditable input VAT (rounded to the nearest VND million) which CPR Co should claim for the car in the fiscal year 2025?",
        options: [
            "VND 160 million",
            "VND 153 million",
            "VND 156 million",
            "VND 150 million"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 30,
        type: "standard",
        question: "In 2025, DFC Co, a Vietnamese company, sold goods to SBY Co, another Vietnamese company, for a total contract value of VND4,840 million, inclusive of 10% value added tax (VAT). According to the contract, SBY Co is required to make payment within one month of the invoice date or pay interest of 1% of the contract value per month, for each month of delay. SBY Co paid the invoice four months after DFC Co issued it on 31 May 2025.\nWhat is the amount of total output value added tax (VAT) (in VND millions, rounded to one decimal) DFC Co is required to declare in 2025 as a result of the above transactions?",
        options: [
            "VND440.0 million",
            "VND459.4 million",
            "VND454.5 million",
            "VND484.0 million"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 31,
        type: "standard",
        question: "NEI Co, a foreign contractor, entered into a contract with PVN, a Vietnamese company, to supply services in relation to oil exploration. NEI Co wants to apply the deduction method for the declaration of value added tax (VAT) in Vietnam. In November 2025 when the tax code application was still in progress, NEI Co incurred input VAT of USD15,000 for its operations in Vietnam. Also during that time, PVN made a progress payment to NEI Co of USD200,000 (net of VAT at 10%) for the services. In December 2025 when the tax code was available, NEI Co incurred a further USD28,000 input VAT for its operations in Vietnam.\nWhat is the amount of NEI Co's deductible input value added tax (VAT) in 2025?",
        options: [
            "USD63,000",
            "USD28,000",
            "USD35,000",
            "USD15,000"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 32,
        type: "standard",
        question: "SWR Co, a Vietnamese company, has three separate sales outlets. In December 2025, each of the outlets issued an invoice for the sale of one ton of construction materials to three separate customers as follows. The sale of construction materials is subject to value added tax (VAT) at the rate of 10%. – Invoice 1: selling price VND20 million, VAT VND2 million – Invoice 2: selling price VND22 million, no VAT as the selling price is inclusive – Invoice 3: Selling price VND20 million, no VAT because the construction materials were given to the customer for free as part of a promotion which has been registered with the authorities\nWhat is the output value added tax (VAT) which SWR Co should have declared in December 2025, if no amendments were made to the invoices?",
        options: [
            "VND4 million",
            "VND2 million",
            "VND4.2 million",
            "VND6.2 million"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 33,
        type: "standard",
        question: "How are the taxable prices determined for goods and services used for registered sales promotion in accordance with trade laws?",
        options: [
            "Sales prices excluded VAT",
            "Sales prices included VAT",
            "Price of similar products, goods or services at the time of consumption of goods or services",
            "Equal to zero"
        ],
        correct: 3,
        explanation: ""
    },
    {
        id: 34,
        type: "statements_list",
        question: "Which of the following cases that input VAT is deductible?",
        statements: [
            "(i) Goods which are used by an enterprise for advertising and promoting the production and trading of goods and services subject to VAT",
            "(ii) Goods purchased by an enterprise for producing goods to be provided to foreign organizations and individuals or international organizations for humanitarian or non-refundable aid",
            "(iii) Goods used for the producing goods and services not subject to VAT",
            "(iv) Goods which are lost or damaged due to a natural calamity, fire"
        ],
        options: [
            "(i) and (iv) only",
            "(i), (iii) and (iv) only",
            "(i), (ii) and (iv) only",
            "(i), (ii), (iii) and (iv)"
        ],
        correct: 2,
        explanation: ""
    },
    {
        id: 35,
        type: "standard",
        question: "In 2025, NHM Co, a Vietnamese company, allocated goods to promotional purposes. The goods had associated input value added tax (VAT) of VND4,000 million and 65% of them were purchased whilst 35% were produced using materials procured by NHM Co during 2025. All promotion programmes were duly registered with the authorities. According to NHM Co's 2025 accounting records, 80% of NHM Co's revenue was taxable for VAT purposes, whilst the other 20% was VAT exempt. The company cannot separately account for the input VAT relating to the goods used for promotion.\nWhat is the final amount of creditable input VAT that NHM Co should declare in 2025?",
        options: [
            "VND3,200 million",
            "VND800 million",
            "VND4,000 million",
            "VND2,600 million"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 36,
        type: "standard",
        question: "The following information of NHP Co in April 2025 is as follows:\nSelling car by 3-month installment method, the installment price excluding VAT is VND30.3 million/car (in which the car price is VND30 million/car, the 3-month installment interest is VND0.3 million). In April 2025, NHP collected VND10.1 million.\nWhat is the VAT taxable price of NHP Co?",
        options: [
            "VND30 million",
            "VND30.3 million",
            "VND10.1 million",
            "VND10 million"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 37,
        type: "standard",
        question: "VXN Co imported the original video player. The import price is VND1.25 million/unit. The import tax rate is 30% and the VAT rate is 10%.\nWhat is the payable VAT of VXN Co?",
        options: [
            "VND130,000",
            "VND162,500",
            "VND137,500",
            "VND155,000"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 38,
        type: "standard",
        question: "ICO Co is a VAT deduction method taxpayer. In October 2025, ICO Co follows the customer's request to issue an invoice that does not include the output VAT but only records the total payment value of VND330. The goods sold by ICO CO are subject to the VAT rate of 10%.\nWhat is the amount of output VAT for the above invoice?",
        options: [
            "VND33 million",
            "VND30 million",
            "VND0",
            "VND300 million"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 39,
        type: "standard",
        question: "Which of the following statements is CORRECT in respect of VAT refund?",
        options: [
            "An organization having accumulated VAT deductible for 3 months continuously is allowed to refund VAT if the amount of accumulated deductible is 300 million or more.",
            "When a taxpayer using the credit method has a new project in the same location with current business, it can get a refund when accumulated VAT input is 300 million or more.",
            "If the taxpayer purchases goods for both export and sales in Vietnam, it can claim a VAT refund if the net VAT is 300 million or more.",
            "The ODA project can claim a VAT refund without a minimum cap for the claim."
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 40,
        type: "standard",
        question: "On 1 June 2025, ABC Co purchased products from XYZ twice, the first time was worth VND44 million (including 10% VAT), the second time was worth VND11 million (including 10% VAT).\nTwo sales invoices are conducted separately on June 1, 2025.\nABC pays XYZ as follows:\n• Transfer from ABC's bank account to XYZs bank account VND33 million;\n• ABC's employees pay VND22 million in cash to XYZs bank account.\nWhat is the amount of input VAT deductible from the above two invoices of ABC Co?",
        options: [
            "VND5.5 million",
            "VND3.3 million",
            "VND3 million",
            "VND2 million"
        ],
        correct: 0, // Lưu ý: Điều chỉnh lại chỉ số đáp án đúng nếu cần
        explanation: ""
    },
    {
        id: 41,
        type: "data_table",
        question: "Aspire Ltd, a VAT registered company, incurred the following expenses in the quarter ended 30 June 2025:",
        questionTable: {
            headers: ["Cost (VND million)", "VAT (VND million)"],
            rows: [
                ["Parking charges", "1,200"],
                ["Trade association subscription", "1,000"],
                ["Golf club subscription – for directors", "2,000"]
            ]
        },
        subQuestion: "What is the amount of input VAT which Aspire Pte Ltd can claim for the quarter ended 30 June 2025?",
        options: [
            "VND220 million",
            "VND420 million",
            "VND120 million",
            "VND200 million"
        ],
        correct: 0, // Lưu ý: Điều chỉnh lại chỉ số đáp án đúng nếu cần
        explanation: ""
    },
    {
        id: 42,
        type: "standard",
        question: "Company B imports a tourism car for business. The import taxable price is USD20,000, the import duty is 30%, the consumption tax rate is 50%, the VAT rate is 10%.\nWhat is the VAT payable relating to this transaction?",
        options: [
            "USD2,000",
            "USD3,000",
            "USD3,900",
            "USD1,000"
        ],
        correct: 0, // Lưu ý: Điều chỉnh lại chỉ số đáp án đúng nếu cần
        explanation: ""
    },
    {
        id: 43,
        type: "standard",
        question: "PC Co, a VAT-registered trader in Vietnam, sold a fully automated computing system for VND100,000 million to a customer. PC allowed the customer to trade in an old computing system for VND10,000 million, leaving VND90,000 million left to pay. To entice early payment of the remaining amount within 15 days, PC offered a 5% prompt payment discount. However, the customer paid after the 15-day discount period.\nWhat is the amount of output VAT PC Co should charge on this transaction?",
        options: [
            "VND9,500 million",
            "VND8,550 million",
            "VND9,000 million",
            "VND10,000 million"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 44,
        type: "standard",
        question: "MNP Store in Hanoi is offering a registered promotion whereby each walk-in customer can receive a coupon of VND 100,000. The coupon can be redeemed if a customer spends over VND2 million. Ms. Mai received a coupon and paid VND3.2 million for a kettle which had a selling price of VND3.3 million, value-added tax (VAT) inclusive. The cost of the kettle was VND2.2 million (excluding creditable input VAT).\nWhat are the VAT implications for MNP Store concerning the above transactions?\nInput VAT\nA. VND0.22 million creditable\nB. VND0 million creditable\nC. VND0.22 million creditable\nD. VND0.22 million creditable\nOutput VAT\nVND0.29 million\nVND0.32 million\nVND0.3 million\nVND0.32 million",
        options: [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 45,
        type: "standard",
        question: "MEP Limited, a company operating in Vietnam, lost its inventory during a heavy rainstorm in August 2024. The purchase cost of the inventory was VND100 million excluding value-added tax (VAT) of VND10 million. The normal selling price of these goods would have been VND150 million (excluding VAT). The insurance company has made a compensation payment of VND20 million to MEP Limited.\nWhat is the amount of irrecoverable input VAT on the inventory lost during the rainstorm?",
        options: [
            "VND0 million",
            "VND8 million",
            "VND3.586 million",
            "VND16 million"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 46,
        type: "standard",
        question: "DPN Ltd, an export processing company, apart from manufacturing for exportation, is also licensed to import goods for sale or for exportation, and the company must establish a branch to do this task. This branch shall independently keep accounting records, declare, and pay separate VAT on such tasks instead of including it in the VAT on manufacturing for exportation.\nWhich of the following CORRECTLY describes the VAT declaration and payment?",
        options: [
            "DPN Ltd declares all the taxes which include also the taxes incurred by the branch",
            "The branch, which is not related to tax-exempt exported goods, does not have to declare and pay",
            "The branch accounts, declares, and pays taxes separately, does not account for production activities for export",
            "There are no correct answers"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 47,
        type: "standard",
        question: "Piggy Co signs a contract to raise pigs with Meat Co, under which Piggy Co receives remuneration of VND100,000 million from Meat Co or sells pigs to company B for VND100,000 million. After that, Meat Co processed pigs into pork and sold to the consumers for VND300,000 million.\nWhich of the following CORRECTLY describes the VAT treatment in the above case?",
        options: [
            "Piggy Co pays the output VAT on the revenue of VND100,000 million",
            "Piggy Co pays the output VAT on the remuneration of VND100,000 million",
            "Meat Co pays the zero output VAT because the selling price is equal to the payment for pig raising",
            "Meat Co pays the output VAT on the revenue of VND300,000 million."
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 48,
        type: "standard",
        question: "In March 2025, ABC Ltd, which pays VAT using the deduction method, pledges its machinery and equipment as collateral to take a loan at Bank B, which is due in one year (the deadline is March 31, 2025). On March 31, 2025, ABC defaults on the loan and has to transfer the collateral to Bank B. ABC must follow the prescribed procedure for collateral transfer. Bank B sells the collateral to recover the debt.\nWhich of the following CORRECTLY describes the VAT payment of Bank B?",
        options: [
            "The bank pays VAT according to the value of the collateral sold.",
            "The bank does not have to pay VAT because the sold collateral is not subject to VAT.",
            "The bank pays VAT on the amount of the irrecoverable lost loan.",
            "Both bank and ABC Ltd must pay output VAT."
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 49,
        type: "standard",
        question: "In April 2025, X Ltd contributed capital in the form of machinery and equipment to the establishment of joint-stock company Y. The company X Ltd's contribution is valued at VND4.5 billion, which is equal to 25% of company Y's total capital. In November 2025, company X sold this capital contribution to ABC Co for VND6 billion.\nWhich is VAT taxable price relating to the transfer of capital contribution transaction?",
        options: [
            "VND6 billion",
            "VND4.5 billion",
            "VND1.5 billion",
            "The transaction is not subject to VAT"
        ],
        correct: 3,
        explanation: ""
    },
    {
        id: 50,
        type: "standard",
        question: "In May 2025, Paper Co sells goods to Pen Co for a total price of VND880 million (included VAT). According to the contract, Pen Co shall pay in installments for 1 month with an interest of 1.5% of the total payment per month. After 1 month, Paper Co received from Pen Co an amount that includes VND880 million in price and VND13.2 million in interest.\nWhat is the VAT taxable price relating to the sales activity above?",
        options: [
            "VND800 million",
            "VND893.2 million",
            "VND880 million",
            "VND13.2 million"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 51,
        type: "standard",
        question: "Water Co manufactures bottled water. The VAT-exclusive price of a bottle on the market is VND10,000. When Water Co produced 800 bottles for the staff children's soccer tournament in the summer of 2024.\nWhich of the following CORRECTLY describes the VAT treatments that Water Co should adopt in this case?",
        options: [
            "Declare and calculate the output VAT on 800 bottles at the selling price",
            "Exemption from the output VAT declaration",
            "Declare and calculate the output VAT on 800 bottles at the factory price",
            "Declare and calculate the output VAT on 800 bottles at the 0 price"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 52,
        type: "standard",
        question: "Shoe Co signs a contract to process 200,000 pairs of soles. The payment for processing is 800 million VND. The contract specifies that soles will be sent to Silver Co in Vietnam to produce complete shoes.\nIn this case, which of the following CORRECTLY describes the VAT declaration of Shoe Co?",
        options: [
            "VAT of 5% on the revenue of VND800 million",
            "VAT of 0% on the revenue of VND800 million",
            "VAT of 10% on the revenue of VND800 million",
            "Exemption from VAT"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 53,
        type: "standard",
        question: "How to identify the VAT taxable price of real estate transaction of a company?",
        options: [
            "Real estate transfer price",
            "Total selling price excluding land use right",
            "Real estate transfer price minus deductible land price",
            "None of the above"
        ],
        correct: 2,
        explanation: ""
    },
    {
        id: 54,
        type: "standard",
        question: "Mobile Co, a telecommunications company, sells prepaid cards for mobile phones. The company registers sales promotion in accordance with the commercial law in the form of selling cards at reduced prices from April 1, 2025, through April 20, 2025. Accordingly, a prepaid card with the face value of VND100,000 (inclusive of VAT) is sold for VND88,000 in the sales promotion period. Mobile Co sold 2,000 of this type of card.\nWhat is the amount of VAT which Mobile Co is required to pay for 2,000 cards sold in the sales promotion period?\nWhat is the VAT taxable value in the sales promotion period?",
        options: [
            "VND200 million",
            "VND160 million",
            "VND145 million",
            "VND180 million"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 55,
        type: "standard",
        question: "Lucky Draw Co, a casino business in Phu Quoc, provides a money exchange service for gambling cards, which players can exchange for money back at the end of the game.\nFigures of October 2025 of Lucky Draw Co showed that:\n• Cash amount collected from customers for token exchange at counters before playing games: VND250 billion.\n• Cash amount paid to customers for tokens returned after playing games: VND184 billion.\nWhat is the amount of VAT which Lucky Draw is required to pay in October 2025?",
        options: [
            "VND250 billion",
            "VND184 billion",
            "VND66 billion",
            "VND60 billion"
        ],
        correct: 3,
        explanation: ""
    },
    {
        id: 56,
        type: "standard",
        question: "Hanoi Tourist Co performs an all-inclusive package tour contract with Singapore. In the third quarter of 2025, there are 100 tourists for 7 days in Vietnam with a total payment of USD150,000. The Vietnamese side has to pay for airfares, meals, accommodation, and sightseeing tours under the agreed program, of which the airfares from Thailand to Vietnam and vice versa cost USD35,000. The applicable exchange rate is USD1 = VND26,500.\nWhat is the VAT taxable price of the contract which Hanoi Tourist Co is required to pay (nearest to VND millions)?",
        options: [
            "VND2,770 million",
            "VND2,875 million",
            "VND3,525 million",
            "VND3,205 million"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 57,
        type: "standard",
        question: "Binh Minh Co has its head office in Dien Bien. In September 2025, it has a new investment project in Son La, which is at the investment stage and has neither commenced operation nor made business and tax registration. The company separately declares input VAT amounts for this project in Dien Bien in the VAT declaration form for the investment project. In October 2025, the investment project's input VAT amount is VND600 million; the payable VAT amount for the company's ongoing production and business activities is VND250 million.\nWhat is the VAT declaration status in the tax period of October 2025?",
        options: [
            "Pay the amount of VND250 million for ongoing business, and the VAT of the investment project remains until the project is completed and apply for a refund for the whole investment period.",
            "Consider VAT refund for the investment project of VND600 million and pay VND250 million for ongoing business separately.",
            "Consider VAT refund for the investment project of VND350 million after clearing the input VAT and the VAT payable.",
            "Pay the amount of VND250 million VAT for ongoing business and the company is not entitled to a VAT refund."
        ],
        correct: 2,
        explanation: ""
    },
    {
        id: 58,
        type: "standard",
        question: "CHICKEN Co, a joint-stock company, purchases materials to produce animal feed and has declared and credited input VAT upon such purchase in October 2025 which is VND100 billion. In that month, 65% of the produced animal feed is sold to the market and 35% is used for animal-rearing activities of the company.\nWhat is the amount of CHICKEN's deductible input value-added tax (VAT) in October 2025?",
        options: [
            "VND100 billion",
            "VND35 billion",
            "VND65 billion",
            "VND0"
        ],
        correct: 3,
        explanation: ""
    },
    {
        id: 59,
        type: "standard",
        question: "ABC Co and XYZ Co are companies established in Vietnam. In 2025, ABC Co provides XYZ Co with consultancy, survey, and feasibility report-making services for an investment project in China. The contractual value received by ABC Co is VND15 billion inclusive of VAT for the services. Under this contract, it is impossible to determine turnover generated in Vietnam and turnover generated in China. ABC Co has calculated expenses arising in China (survey and exploration expenses) of VND7.5 billion and expenses arising in Vietnam (summarization and reporting expenses) of VND4.5 billion.\nWhat is the amount of VAT-exclusive turnover subject to VAT rate of 10%? (round to 2 decimal places)",
        options: [
            "VND13.64 billion",
            "VND5.63 billion",
            "VND6.82 billion",
            "VND5.11 billion"
        ],
        correct: 2,
        explanation: ""
    },
    {
        id: 60,
        type: "statements_list",
        question: "Which cases do not allow to apply VAT rate 0%?",
        statements: [
            "(i) Market research services provided to Malaysia Company for its business plan to import goods from Malaysia to consume in Vietnam",
            "(ii) Selling car to a Vietnam company in export processing zone",
            "(iii) Online payment services for Singapore Company in Vietnam",
            "(iv) Transport service for employees working in non-tariff zone"
        ],
        options: [
            "(i) & (iv)",
            "(i), (iii) & (iv) only",
            "(i), (ii) & (iii) only",
            "(ii) & (iii) only"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 61,
        type: "option_table",
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
        correct: 0, // Tương ứng với đáp án A (Option 3)
        explanation: ""
    },
    {
        id: 62,
        type: "standard",
        question: "LMC Co, a Vietnamese company, owns 80% of the charter capital of another Vietnamese company, NOP Co.\nNOP Co borrowed an amount of VND100,000 million from LMC Co at an interest rate of 8% per annum (being the market rate at the time of borrowing).\nOn 31 December 2025, NOP Co paid a total dividend of VND50,000 million to its shareholders. It also paid interest expenses of VND8,000 million to LMC Co for the borrowing.\nIn its corporate income tax return, NOP Co voluntarily excluded VND5,000 million, which related to non-deductible expenses due to insufficient capital contributions by shareholders as at the year-end. Both LMC Co and NOP Co properly recorded the interest and dividends in their financial statements.\nWhat is/are the adjustment(s) which LMC Co should make to taxable income in its corporate income tax return for the fiscal year ended 31 December 2025?",
        options: [
            "Deduct VND40,000 million",
            "Deduct VND50,000 million",
            "Deduct VND40,000 million, and add back VND5,000 million",
            "No adjustment"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 63,
        type: "standard",
        question: "CDP Co, a Vietnamese company operating in transportation, purchased a four seater car on 1 March 2025 for VND2,640 million, inclusive of value added tax (VAT) at a rate of 10%.\nThe car is expected to have a useful life of five years. The car is used specifically for the company's transportation business.\nWhat is the amount (rounded to the nearest VND million) of CDP Co's deductible depreciation expense for corporate income tax purposes in the year ended 31 December 2025?",
        options: [
            "VND267 million",
            "VND400 million",
            "VND440 million",
            "VND320 million"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 64,
        type: "standard",
        question: "UNF Co, a Vietnamese company, provided its employees with the following uniforms in the year 2025:\n• For 50 office employees, the company directly purchased the uniforms for the employees, with a total cost, supported by invoices, of VND300 million.\n• In addition, the company also paid each office employee VND2 million per person in cash for them to purchase additional uniforms as necessary.\n• For 200 factory workers, the company directly purchased the uniforms and distributed them to the employees. The total cost of the factory worker uniforms, supported by invoices, was VND1,200 million.\nWhat is the total amount of uniform expense that UNF Co can deduct for corporate income tax purposes for the year ended 31 December 2025?",
        options: [
            "VND1,350 million",
            "VND1,250 million",
            "VND1,500 million",
            "VND1,600 million"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 65,
        type: "option_table",
        question: "MBM JSC is a Vietnamese company listed on the stock market. In the fiscal year ended 31 December 2025, the company paid a total salary expense of VND18,000 million to its board of directors, comprising of nine members.\nOf those members, five are non-active and the remaining are active members. All non-active members receive the same salary as each other, and all active members receive the same salary as each other.\nEach active member who participates in the day-to-day operations management of the company receives a salary equivalent to 2.5 times greater than the salary awarded to a non-active member.\n\nWhat is the amount of deductible and non-deductible expenses for corporate income tax purposes for MBM JSC in the fiscal year ended 31 December 2025?",
        optionTable: {
            headers: ["Option", "Deductible expenses (VND million)", "Non-deductible expenses (VND million)"],
            rows: [
                ["1", "18,000", "0"],
                ["2", "10,000", "8,000"],
                ["3", "0", "18,000"],
                ["4", "12,000", "6,000"]
            ]
        },
        options: ["Option 1", "Option 2", "Option 3", "Option 4"],
        correct: 0, // Lưu ý: Điều chỉnh lại chỉ số đáp án đúng nếu cần
        explanation: ""
    },
    {
        id: 66,
        type: "standard",
        question: "On 1 April 2025, NDC Co (NDC), a Vietnamese company, purchased an exclusive right from SLL Co (SLL), a Korean company, to distribute SLL's flagship products in Vietnam.\nThe value of the exclusive right is VND240,000 million for a period of four years (extendable to six years for the nominal price), to be paid in full at the beginning of the agreement.\nNDC decided to amortise the right over four years for accounting purposes and recorded the amortisation expense accordingly.\nThe tax authority in charge of NDC instructed that the right should be amortised over six years for tax purposes.\nWhat adjustment should NDC Co make for the amortisation expense in its corporate income tax return for the fiscal year ended 30 September 2025?",
        options: [
            "Add back VND10,000 million",
            "Deduct VND10,000 million",
            "Deduct VND20,000 million",
            "No adjustment"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 67,
        type: "standard",
        question: "SPP Co (SPP) is the Vietnamese subsidiary of a Malaysian group investing in emerging companies in Southeast Asia. In 2016, SPP purchased all the shares in VSC Co (VSC), a limited liability company, for VND30,000 million.\nVSC was subsequently converted into a joint stock company and listed on the stock exchange.\nIn the year 2025, SPP sold 80% of the shareholding in VSC for VND50,000 million.\nWhat is the amount (in VND million) of corporate income tax payable by SPP Co in Vietnam for the sale of shares in the year 2025?",
        options: [
            "VND50 million",
            "VND5,200 million",
            "VND4,000 million",
            "VND26 million"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 68,
        type: "option_table",
        question: "In April 2025, TBE Co, a Vietnamese company, disposed of an item of equipment for VND1,600 million.\nThe machine was purchased in January 2023 for VND3,600 million.\nThe original estimated useful life of the equipment was four years. TBE Co's policy is to have a full month's depreciation in the month of purchase and no depreciation in the month of disposal.\nAll amounts are exclusive of value added tax (VAT) at 10%.\nWhat taxable gain and deductible expenses should TBE Co recognise in calculating its taxable profits for corporate income tax purposes for the year ended 30 September 2025?",
        optionTable: {
            headers: ["Option", "Taxable gain (VND million)", "Deductible expenses (VND million)"],
            rows: [
                ["1", "475", "450"],
                ["2", "700", "225"],
                ["3", "475", "0"],
                ["4", "25", "900"]
            ]
        },
        options: ["Option 1", "Option 2", "Option 3", "Option 4"],
        correct: 0,
        explanation: ""
    },
    {
        id: 69,
        type: "standard",
        question: "On 31 July 2025, GRT JSC, a listed company in Vietnam, bought back 200,000 of its shares at VND50,000 per share from the stock exchange as treasury shares.\nOn 31 December 2025, when the market price of the shares was VND70,000 per share, GRT JSC granted options to purchase those shares at a nominal value of VND10,000 per share to the executives of the company as a bonus for their performance. The option would vest in one year, assuming the executives were still working for GRT JSC at that time.\nWhat is the total deductible expense for corporate income tax purposes by GRT JSC in relation to the transactions for the fiscal year ended 31 December 2025?",
        options: [
            "0",
            "VND10,000 million",
            "VND14,000 million",
            "VND8,000 million"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 70,
        type: "option_table",
        question: "LPC Co is a Vietnamese company. On 15 October 2024, LPC Co entered into a service agreement for VND 1,000 million with a local supplier. The services were completed on 30 December 2024. LPC Co paid 90% of the agreed amount upon completion of services by bank transfer. The remaining balance was settled in cash on 30 January 2025.\nLPC Co accounted for the entire contract value as costs incurred in the audited financial statements for the fiscal year ended 31 December 2024.\n\nWhat are the required adjustments to the accounting profits of LPC Co for the purposes of corporate income tax in relation to these transactions for the fiscal years ended 31 December 2024 and 2025?",
        optionTable: {
            headers: ["Option", "Year 2024", "Year 2025"],
            rows: [
                ["1", "Add back VND 100 million", "No adjustment"],
                ["2", "No adjustment", "Add back VND 100 million"],
                ["3", "Deduct VND 100 million", "Add back VND 200 million"],
                ["4", "No adjustment", "Deduct VND 100 million"]
            ]
        },
        options: ["Option 1", "Option 2", "Option 3", "Option 4"],
        correct: 0,
        explanation: ""
    },
    {
        id: 71,
        type: "standard",
        question: "On 1 April 2025, LAT Co, a Vietnamese company, leased a machine for four years and paid the rent of VND1,200 million for all four years in advance. The lease agreement states that during the lease period, repair costs of the machine would be borne by LAT Co.\nOn 1 December 2025, LAT Co paid a repair expense of VND 72 million for the machine. LAT Co would like to amortize the repair expense over the longest allowable period as per the regulations.\nWhat is the amount of deductible expense that LAT Co can claim for corporate income tax purposes regarding the machine in the year ended 31 December 2025?",
        options: [
            "VND297 million",
            "VND 324 million",
            "VND 227 million",
            "VND318 million"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 72,
        type: "standard",
        question: "In the year 2025, TFR JSC, a Vietnamese joint stock company, sold all the shares it held in X JSC, another Vietnamese joint stock company, for VND200,000 million. The shares were purchased for VND195,000 million in 2023.\nIn the year 2025, TFR Co issued 1 million new shares at a price of VND12,000 per share to a new investor to increase its capital. The nominal value of each share is VND10,000.\nWhat is the corporate income tax liability incurred by TFR JSC from these transactions for the fiscal year ended 31 December 2025?",
        options: [
            "VND1,000 million",
            "VND200 million",
            "VND1,400 million",
            "VND600 million"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 73,
        type: "standard",
        question: "LXC Co, a Vietnamese company, purchased a five-seat luxury car for VND2,800 million on 1 April 2023. The expected useful life of the car was four years.\nLXC Co disposed of the car for VND1,500 million on 30 September 2025.\nFor corporate income tax purposes, what is the amount of taxable gain / deductible loss from the disposal of LXC Co's car in the year ended 31 December 2025?",
        options: [
            "VND250 million loss",
            "VND 450 million gain",
            "VND900 million gain",
            "VND 300 million loss"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 74,
        type: "standard",
        question: "KLT Co, a Vietnamese company which applies the deduction method for value added tax (VAT) purposes started renting an office for its operations on 1 May 2025.\nOn the same date, KLT Co paid the landlord an amount for both rent and deposit of VND594 million, equivalent to rental fees for three months. This amount is inclusive of 10% VAT.\nThereafter, rent is payable in advance at the beginning of each month.\nRent payments were made accordingly until the year-end.\nWhat is the amount of deductible rental expense which KLT Co can claim for corporate Income tax purposes in the year ended 31 December 2025?",
        options: [
            "VND1,584 million",
            "VND1,440 million",
            "VND1,800 million",
            "VND1,980 million"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 75,
        type: "standard",
        question: "RLS Co is a Vietnamese company headquartered in Ho Chi Minh City.\nIn the year 2025, RLS Co conducted some real estate transfer transactions in Dong Nai and Binh Duong provinces.\nWhich of the following are the correct statements about RLS Co's corporate income tax declaration requirements in Vietnam with regard to the real estate transfers?\n(1) RLS Co is required to provisionally declare AND pay tax on a quarterly basis to Dong Nai and Binh Duong provinces.\n(2) At the year-end, RLS Co is required to determine the corporate income tax payable to Dong Nai and Binh Duong from the real estate transfers in each province.\n(3) At the year-end, RLS Co is required to declare and finalise tax from real estate transfers with Ho Chi Minh City tax authority.",
        options: [
            "1 and 3 only",
            "1, 2 and 3",
            "1 and 2 only",
            "2 and 3 only"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 76,
        type: "standard",
        question: "In the year 2022, SHD Co, a Vietnamese company, contributed capital of VND50,000 million to RCP JSC, a joint stock company in Vietnam.\nIn December 2025, SHD Co transferred 80% of the capital held in RCP JSC to a foreign company for VND80,000 million. The retained earnings of RCP JSC at the time of the transfer was VND40,000 million.\nThe transfer expenses incurred by SHD Co totalled VND500 million and were supported by proper documents.\nWhat is the corporate income tax liability incurred by SHD Co from the capital transfer in RCP JSC for the fiscal year ended 31 December 2025?",
        options: [
            "VND80 million",
            "VND7,900 million",
            "VND1,500 million",
            "VND2,800 million"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 77,
        type: "standard",
        question: "RLE Co is a Vietnamese company operating in diversified business. RLE Co is not entitled to any tax incentive.\nIn the year ended 31 December 2025, the company's audited financial statements showed an operating loss of VND80,000 million. The company also reported profits of VND45,000 million and VND35,000 million from the transfer of real estate and transfer of an investment project, respectively, during the year\nWhat is the amount of corporate income tax payable by RLE Co for the year ended 31 December 2025?",
        options: [
            "VND9,000 million",
            "VND7,000 million",
            "VND0",
            "VND16,000 million"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 78,
        type: "standard",
        question: "On 1 April 2025, CADP Co, a Vietnamese company, purchased a 12-seat car wholly for business use for VND3,960 million (including value added tax (VAT) at 10%).\nFor the fiscal year ended 30 September 2025, the car has been depreciated in the accounts based on its expected useful life of five years.\nWhat is the amount of non-deductible depreciation expense, in relation to the car, which CADP Co should add back to its accounting profits in its corporate income tax return for the fiscal year ended 30 September 2025?",
        options: [
            "VND360 million",
            "VND200 million",
            "VND0",
            "VND400 million"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 79,
        type: "standard",
        question: "SFB JSC is a Vietnamese joint stock company with seven members on the board. Among these members, three are active and four are non-active. Non-active members receive 50% of the remuneration of active members. In the fiscal year ended 31 December 2025, SFB JSC paid the active board members an amount of VND2,000 million EACH as remuneration.\nWhat is the deductible remuneration expense paid to board members that SFB JSC can report in its corporate income tax return for the fiscal year ended 31 December 2025?",
        options: [
            "VND10,000 million",
            "VND4,000 million",
            "VND6,000 million",
            "VND0"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 80,
        type: "standard",
        question: "In January 2024, CCL Co, a Vietnamese company, contributed the land use right (LUR) of a piece of land with an indefinite term as a capital contribution to LKS Co, its wholly owned subsidiary. The value of the capital contribution to LKS Co was agreed at VND200,000 million.\nCCL Co recognised a gain of VND180,000 million from the revaluation of the LUR at the contribution date and amortises the gain over ten years. In the fiscal year ended 31 December 2025, CCL Co sold all of its capital contribution in LKS Co for VND230,000 million.\nWhat is the total amount of taxable income that CCL Co should report in its corporate income tax return in the fiscal year ended 31 December 2025 from the sale of its capital contribution in LKS Co?",
        options: [
            "VND174,000 million",
            "VND144,000 million",
            "VND230,000 million",
            "VND30,000 million"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 81,
        type: "standard",
        question: "DDK Co, headquartered in Hanoi, has a manufacturing dependent branch in Vinh Phuc province. No incentive is available to the branch. DDK Co understands that under the tax administration regulations it may be required to allocate a portion of its corporate income tax (CIT) payable in the year 2025 to Vinh Phuc, based on a ratio of revenue or cost between the branch and DDK Co.\nWhich of the following is the appropriate ratio for DDK Co's CIT allocation under Circular 80/2021?",
        options: [
            "Percentage of deductible costs in the CIT return for the year 2025",
            "Percentage of taxable revenue in the CIT return for the year 2025",
            "Percentage of actual costs in the year 2025",
            "Percentage of actual revenue in the year 2025"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 82,
        type: "standard",
        question: "ITC Co is a Vietnamese company with various related party transactions in the year 2025.\nOn 2 January 2025, it issued bonds with a total nominal value of VND100,000 million at an interest rate of 8% per annum. For the fiscal year ended 30 September 2025, ITC Co accrued for the interest from the bonds in the company accounts.\nFor the same year, the company recorded an operating profit before finance costs of VND12,000 million. The depreciation expense during the year was VND3,000 million.\nWhat is the amount of non-deductible interest expense for corporate income tax (CIT) purposes that ITC Co is required to adjust on its CIT return for the year ended 30 September 2025?",
        options: [
            "VND4,500 million",
            "VND1,500 million",
            "VND0",
            "VND3,500 million"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 83,
        type: "standard",
        question: "PRV Co is a company incorporated in Vietnam. In the fiscal year ended 31 December 2024, the company made a provision of VND1,800 million for unpaid employment compensation and declared the provision as fully deductible for corporate income tax (CIT) purposes. PRV Co paid VND1,300 million out of the provision by 30 June 2025, and the remaining VND500 million by 31 December 2025.\nWhat is the amount of compensation expense that should be excluded when calculating the deductible wages for CIT purposes by PRV Co in the year ended 31 December 2025?",
        options: [
            "VND 1,300 million",
            "VND 500 million",
            "VND 0",
            "VND 1,800 million"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 84,
        type: "standard",
        question: "VPC Co is a foreign-invested enterprise in Vietnam. At 1 January 2025, VPC Co had 100 full-time employees. 12 of these employees left the company on 31 May 2025 and 20 new employees commenced working for the company from 1 July 2025. VPC Co states in its fiscal policy that it will contribute to a voluntary pension for all of its full-time employees during the time they work for the company at the rate of VND7 million per month. VPC Co complies with all compulsory insurance requirements.\nWhat is the amount of non-deductible expenses in regard to the voluntary insurance contributions (in VND million) that VPC Co must adjust for in its corporate income tax return for the fiscal year ended 31 December 2025?",
        options: [
            "VND 2,472 million",
            "VND 6,180 million",
            "VND 0",
            "VND 3,708 million"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 85,
        type: "standard",
        question: "DDC Co, a Vietnamese company, was established in 2024. DDC Co made losses in 2024 and 2025. On 1 December 2024, DDC Co purchased an item of specialised equipment for VND18,000 million which had an estimated useful life of five years (within the allowable range). However, DDC Co wants to accelerate the depreciation due to potential technological advancements, and so registered a useful life of three years as its accounting treatment.\nWhat is the amount of non-deductible depreciation expense (in VND million) that DDC Co should adjust for in its corporate income tax return in the fiscal year ended 30 September 2025?",
        options: [
            "VND 2,000 million",
            "VND 2,400 million",
            "VND 0",
            "VND 3,000 million"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 86,
        type: "standard",
        question: "SOC Co is a Vietnamese company with a chartered capital of VND 800 billion and has a fiscal year-end of 31 December. As at 1 January 2025, the actual capital contribution made by SOC Co investors was VND500 billion, and the chartered contribution was only fully contributed on 30 September 2025. On 1 January 2025, SOC Co borrowed VND 600 billion at an interest rate of 8% per annum. SOC Co has no related party transactions.\nWhat is the amount of deductible expenses (in VND billion) for corporate income tax (CIT) purposes that SOC Co can declare on its CIT return for the year ended 31 December 2025?",
        options: [
            "VND 48 billion",
            "VND 18 billion",
            "VND 30 billion",
            "VND 24 billion"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 87,
        type: "standard",
        question: "TKC Co, a foreign invested company in Vietnam, rented an office for its operations from 1 June 2025. At the outset of the rent, TKC Co paid a lump sum of VND1,925 million, covering a deposit equivalent to three monthly rental fees plus two months' rental fees payable in advance. The amount is inclusive of 10% value added tax (VAT).\nWhat amount of rental expenses can TKC Co claim as deductible for corporate income tax purposes in the fiscal year ended 31 December 2025?",
        options: [
            "VND1,750 million",
            "VND2,695 million",
            "VND2,450 million",
            "VND3,500 million"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 88,
        type: "option_table",
        question: "BBA is an airline company registered in Vietnam. In the two years ended 31 December 2024 and 2025, the collections from the sales of air tickets for local transportation by BBA were as follows:",
        questionTable: {
            headers: ["", "2024", "2025"],
            rows: [
                ["Total collections (in VND billion)", "4,000", "4,500"],
                ["% of collections in advance (for which transportation activities are completed in the following year)", "6%", "5%"]
            ]
        },
        subQuestion: "Note: The collections received in advance have been deducted from taxable revenue in the year received.\nWhat are the correct adjustments to taxable revenue from the sale of air tickets which BBA should recognise in the corporate income tax return of the year ended 31 December 2025?",
        optionTable: {
            headers: ["Option", "Add back (VND billion)", "Deduct (VND billion)"],
            rows: [
                ["1", "225", "0"],
                ["2", "240", "225"],
                ["3", "225", "240"],
                ["4", "0", "0"]
            ]
        },
        options: ["Option 1", "Option 2", "Option 3", "Option 4"],
        correct: 0,
        explanation: ""
    },
    {
        id: 89,
        type: "standard",
        question: "On 4 January 2025, INCT Co, a Vietnamese company, entered into an agreement to provide software as a service (SAAS) to FHC Co, another Vietnamese company, over three years. This service has a substance similar to ‘rent' of cloud storage. The total contract value is VND6,000 million, and FHC Co paid INCT Co in advance to secure this price. INCT Co was entitled to a corporate income tax (CIT) exemption incentive in fiscal year 2025, and this was the company's last year in the CIT holiday period to which it was entitled, according to the investment certificate. INCT Co prepares accounts to 30 September annually.\nWhat is the amount of taxable revenue that INCT Co should declare in its CIT return in the fiscal year ended 30 September 2025?",
        options: [
            "VND1,500 million",
            "VND6,000 million",
            "VND4,500 million",
            "VND2,000 million"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 90,
        type: "standard",
        question: "On 2 January 2025, BSC Co purchased a technical study from a professional company for VND9,000 million (excluding value added tax (VAT) which was not applicable). BSC Co later used the study for the production of a new product. For accounting purposes, BSC Co decided to amortize the cost over a period of ten years. However, for tax purposes, the technical study did not meet the requirement for intangible assets, and therefore BSC Co must allocate the costs within the maximum allowable period.\nWhat adjustment in the corporate income tax return should BSC Co make for the year ended 31 December 2025 in relation to the above purchase?",
        options: [
            "Treat VND2,100 million as non-deductible expenses",
            "Claim VND2,100 million as additional deductible expenses",
            "Treat VND9,000 million as non-deductible expenses",
            "No adjustment is needed"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 91,
        type: "standard",
        question: "LMC Co is a company established in Vietnam in 2022. From its first profit-making year, the company was entitled to two years tax exemption followed by four years of 50% tax reduction. The company made a tax loss of VND25,000 million in 2022, a taxable profit of VND5,000 million in 2023 and a tax loss of VND16,000 million in 2024. In 2025, the company made a taxable profit of VND45,000 million.\nWhat is the amount of corporate income tax payable by LMC Co in the year 2025?",
        options: [
            "VND0 million",
            "VND400 million",
            "VND1,800 million",
            "VND900 million"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 92,
        type: "standard",
        question: "On 1 November 2025, SIP Co signed a contract to provide management consulting services to CLNT Co, for a fee of VND2,200 million (inclusive of VAT). The contract provided that CLNT Co would pay the full contract amount in 2025, and SIP Co would issue an invoice for the full amount to CLNT Co. On 31 December 2025, the parties agreed that SIP Co had completed 45% of the work under the contract. SIP Co estimated that the costs incurred by the end of 2025 were VND300 million.\nWhat is a reasonable amount of corporate income tax payable by SIP Co in respect of the above contract in 2025?",
        options: [
            "VND340 million",
            "VND180 million",
            "VND400 million",
            "VND120 million"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 93,
        type: "option_table",
        question: "In the year ended 31 December 2024, SPC Co made a provision of VND10,000 million for salary funds to be paid in 2025. By 30 June 2025, SPC Co had disbursed VND8,000 million out of the provision. On 31 December 2025, SPC Co made a provision for salary funds to be paid in 2025 of VND9,000 million. The provision made in both years fell within the allowable cap.\n\nWhat is the tax treatment for corporate income tax purposes of the provisions for salary funds made by SPC Co in the year ended 31 December 2025?",
        optionTable: {
            headers: ["Option", "At 30 June 2025", "At 31 December 2025"],
            rows: [
                ["1", "Reduce deductible expenses by VND8,000 million", "Increase deductible expenses by VND9,000 million"],
                ["2", "Reduce deductible expenses by VND2,000 million", "Increase deductible expenses by VND9,000 million"],
                ["3", "Increase deductible expenses by VND2,000 million", "Reduce deductible expenses by VND9,000 million"],
                ["4", "Increase deductible expenses by VND8,000 million", "Reduce deductible expenses by VND9,000 million"]
            ]
        },
        options: ["Option 1", "Option 2", "Option 3", "Option 4"],
        correct: 0,
        explanation: ""
    },
    {
        id: 94,
        type: "standard",
        question: "On 1 April 2025, DRP Co, a Vietnamese company, entered into an agreement with LCS Co, a Singapore company, whereby DRP Co paid LCS Co a lump-sum of VND12,000 million for exclusive rights to distribute special equipment in Vietnam. The terms of the distribution agreement are for a period of three years (extendable to five years). DRP Co decided to amortise the rights over three years for accounting purposes. According to specific guidance from the local tax authorities, the rights should be amortised over five years.\nWhat adjustment should DRP Co make for non-deductible amortisation expenses in its corporate income tax return for the year ended 31 December 2025?",
        options: [
            "VND1,600 million",
            "VND1,200 million",
            "VND2,400 million",
            "VND1,800 million"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 95,
        type: "standard",
        question: "TMP Co is a Vietnamese company which develops real estate. The company has a project to develop apartments for sale, which is expected to be completed in 2029. The estimated total revenue and costs from the project are VND1,500 billion and VND1,000 billion respectively.\nIn 2025, TMP Co collected VND200 billion in advance from customers, and paid 1% provisional corporate income tax (CIT) on the collections. TMP Co has not been able to determine costs incurred by the end of 2025.\nWhat is the taxable income from the project which TMP Co should declare in its CIT return for 2025?",
        options: [
            "VND0",
            "VND500 billion",
            "VND200 billion",
            "VND1,500 billion"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 96,
        type: "option_table",
        question: "In the year ended 31 December 2025, PLT Co, a Vietnamese company, purchased goods valued at VND8,000 million for trading. 60% of the goods were sold but the rest were damaged in a flood. The company's insurer agreed to partially compensate PLT Co for the damages. The insurer instructed PLT Co to sell the damaged goods at scrap value on behalf of the insurer for VND600 million and to keep this amount. In December 2025, the insurer settled the net remaining compensation amount due to PLT Co of VND1,800 million.\nWhat is the amount of uninsured loss and its tax treatment in PLT Co's corporate income tax return for the year ended 31 December 2025?\nNote: Any value added tax (VAT) implications should be ignored.",
        optionTable: {
            headers: ["Option", "Uninsured Loss", "Tax Treatment"],
            rows: [
                ["1", "VND1,400 million", "Deductible expenses"],
                ["2", "VND800 million", "Non-deductible expenses"],
                ["3", "VND1,400 million", "Non-deductible expenses"],
                ["4", "VND800 million", "Deductible expenses"]
            ]
        },
        options: ["Option 1", "Option 2", "Option 3", "Option 4"],
        correct: 0,
        explanation: ""
    },
    {
        id: 97,
        type: "standard",
        question: "In 2025, LMK Co, a Vietnamese company, made a loss of VND20 billion from incentive activities which were entitled to tax exemption. In addition, LMK Co made gains of VND3 billion from transferring real estate, and had other income of VND12 billion, including VND5 billion dividend income received from subsidiaries. LMK Co had no loss carried forward from prior years.\nWhat is the tax loss LMK Co can carry forward in 2025?",
        options: [
            "VND13 billion",
            "VND8 billion",
            "VND5 billion",
            "VND15 billion"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 98,
        type: "standard",
        question: "On 1 April 2025, CDP Co, a Vietnamese company, purchased a four-seat car for business use for VND2,640 million (including value added tax (VAT) at 10%). The car has been depreciated in the accounts based on its expected useful life of five years.\nWhat is the adjustment for non-deductible depreciation expenses which CDP Co should make in relation to the car in its corporate income tax (CIT) return for the year ended 31 December 2025?",
        options: [
            "VND0 million",
            "VND160 million",
            "VND120 million",
            "VND240 million"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 99,
        type: "standard",
        question: "OTV Co is a limited liability company in Vietnam wholly owned by OKK Co, a company incorporated in Hong Kong. In 2025, OKK Co sold its shares in OTV Co to SCC Co, a company established in Thailand, for USD25 million, equal to the amount of its capital contribution to OTV Co.\nWhich one of the following statements correctly describes the Vietnamese corporate income tax (CIT) declaration requirements in respect of OKK Co's transfer of shares in OTV Co to SCC Co?",
        options: [
            "No CIT declaration is required - OKK Co is not subject to CIT as it has no taxable capital gain",
            "The seller (OKK Co) is required to file a CIT declaration to the Vietnamese tax authorities, despite it having made no taxable gain",
            "The buyer (SCC Co) is required to determine if there is a taxable capital gain, in which case it must file a CIT declaration with the Vietnamese tax authorities on behalf of OKK Co",
            "Regardless of whether or not there is a taxable gain, the Vietnamese target company (OTV Co) is required to submit a CIT declaration to the Vietnamese tax authorities"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 100,
        type: "standard",
        question: "In the year ended 31 December 2025, NIC Co, a company established in Vietnam, purchased materials costing VND3,000 million for its business activities. During the year, there was a fire which damaged 30% of the materials. NIC Co sold the damaged materials for VND100 million and received compensation of VND250 million from the party who caused the fire. NIC Co did not have any insurance cover for the materials.\nWhat is the amount of net deductible expense in relation to the damaged materials that NIC Co can claim for corporate income tax (CIT) purposes in the year ended 31 December 2025?\nNote: You should ignore value added tax (VAT)",
        options: [
            "VND550 million",
            "VND0 million",
            "VND800 million",
            "VND650 million"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 101,
        type: "standard",
        question: "On September 2025, PMC Co paid remuneration to its board of directors of VND4,200 million. Each of the seven directors received an equal amount of remuneration. Four of them are not directly involved in the day-to-day management of the company's business.\nWhat is the amount of adjustment to tax deductible expenses which PMC Co should make in respect of the remuneration in its corporate income tax (CIT) return for the year ended 30 September 2025?",
        options: [
            "VND0 million",
            "VND4,200 million",
            "VND2,400 million",
            "VND1,800 million"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 102,
        type: "standard",
        question: "FDS Co is a Vietnamese joint stock company with original chartered capital of VND40,000 million, equally contributed by its four founding corporate and individual shareholders. In 2025, FDS Co issued new shares with a nominal value of VND10,000 million to another Vietnamese company, ACQ Co, for VND65,000 million. FDS Co recognised the excess over the nominal value as a share premium.\nWhat is the amount of taxable income that FDS Co should declare in its corporate income tax (CIT) return for the year ended 31 December 2025 in respect of the issue of shares?",
        options: [
            "VND15,000 million",
            "VND0 million",
            "VND25,000 million",
            "VND65,000 million"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 103,
        type: "standard",
        question: "In July 2024, DPN Co, a company incorporated in Vietnam, purchased two identical items of equipment, A and B, for a total amount of VND 12,000 million (exclusive of value added tax (VAT)). The estimated useful life of the equipment is five years, and DPN Co depreciates it on a monthly basis. Both A and B are used from August to December each year to make a product that is consumed specifically on the occasion of Lunar New Year. In 2024, both A and B were fully operated from August to December. In 2025, as orders received were insufficient, only A was fully functional from August to December 2025 while B was used from November to December 2025 only.\nWhat is the total accumulated depreciation expense of DPN Co for corporate income tax (CIT) purposes with respect to equipment items A and B for the fiscal year ended 31 December 2025?",
        options: [
            "VND 1,400 million",
            "VND 3,600 million",
            "VND 2,600 million",
            "VND 2,400 million"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 104,
        type: "option_table",
        question: "TLC Co, a company incorporated in Vietnam, is the subsidiary of HLC Co, a company incorporated in the United States. In 2025, HLC Co sold TLC Co shares to SQL Co, a company incorporated in Singapore, at a gain. The transfer agreement was signed on 1 July 2025 and the transfer was approved by the competent authority on 15 July 2025.\n\nWhat is the deadline for the submission of the tax declaration in respect of the capital gain arising on the share transfer, and which party is responsible for the declaration?",
        optionTable: {
            headers: ["Option", "Deadline", "Declared by"],
            rows: [
                ["Option 1", "11 July 2025", "HLC Co"],
                ["Option 2", "25 July 2025", "TLC Co"],
                ["Option 3", "11 July 2025", "TLC Co"],
                ["Option 4", "25 July 2025", "HLC Co"]
            ]
        },
        options: ["Option 1", "Option 2", "Option 3", "Option 4"],
        correct: 0,
        explanation: ""
    },
    {
        id: 105,
        type: "option_table",
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
        correct: 0,
        explanation: ""
    },
    {
        id: 106,
        type: "standard",
        question: "In 2021, SHC JSC, a joint-stock company registered in Vietnam, invested in shares of VNC JSC, a company listed on the Vietnamese stock market, when the share price was VND 12,000 per share. In July 2025, SHC JSC received dividends from VNC JSC in the form of five million bonus shares, when the market price of one share in VNC JSC was VND 15,200. In November 2025, SHC JSC sold four million bonus shares of VNC JSC for VND 15,000 per share. SHC JSC is subject to the standard rate of corporate tax.\nWhat is the total corporate income tax (CIT) liability payable by SHC JSC in the fiscal year 2025 on the receipt of the dividend in July 2025 and the sale of the shares in November 2025?",
        options: [
            "VND 2,400 million",
            "VND 15,200 million",
            "VND 12,000 million",
            "VND 3,200 million"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 107,
        type: "standard",
        question: "BDC JSC is a Vietnamese company listed on the stock market. The company has seven board members; three are active members and the remaining four are non-active members.\nAccording to the board resolution, members in each category should receive equal salary. Active members who participate directly in managing the company's operations receive a salary which is 200% of the salary received by non-active members. The company recorded a total salary expense for the board of VND 10,000 million in its accounting books for the fiscal year ended 31 December 2025.\nWhat are the non-deductible expenses BDC JSC should declare in its corporate income tax (CIT) return for the fiscal year ended 31 December 2025?",
        options: [
            "VND 10,000 million",
            "VND 0 million",
            "VND 6,000 million",
            "VND 4,000 million"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 108,
        type: "standard",
        question: "In March 2025, DPN Co, a Vietnamese company, disposed of a machine for VND2,200 million. The machine was purchased in January 2024 for VND3,600 million with an estimated useful life of three years. DPN Co's policy (which is acceptable for tax depreciation) is to provide for a full month's depreciation in the month of purchase and no depreciation in the month of disposal.\nWhat is the taxable gain on the disposal of the machine which DPN Co must declare for corporate income tax (CIT) purposes for its financial year ended 30 June 2025?",
        options: [
            "VND100 million",
            "VND2,200 million",
            "VND0 million",
            "VND800 million"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 109,
        type: "standard",
        question: "Ms Huong Nguyen, who gave birth on 1 February 2025, is CEO of HWK Co, a company in Vietnam. She returned to work on 1 May 2025, despite the company policy and the regulations allowing her a six-month maternity leave. When she returned, the company paid her normal salary of VND300 million per month and in addition, during the three months ended 31 July 2025, she received an overtime allowance of VND150 million per month (which is within the range of allowed overtime under prevailing labour regulations). However, Ms Huong Nguyen did not actually work any overtime and the allowance was paid to compensate her for early return from maternity leave as a result of work requirements. The company and Ms Huong Nguyen did not claim any maternity leave benefits from social insurance from May 2025 onwards.\nWhat is the adjustment amount for non-deductible expenses which HWK Co should make in its corporate income tax (CIT) return for the year ended 31 December 2025 in respect of the payments to Ms Huong Nguyen?",
        options: [
            "VND1,350 million",
            "VND450 million",
            "VND0 million",
            "VND900 million"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 110,
        type: "statements_list",
        question: "CCD Co, a company in Vietnam, reimbursed employees' expenses for overseas business trips originally paid by the employees using their personal credit cards. The expenses amounted to VND50 million in total.\nWhich of the following conditions must be met for CCD Co to treat such reimbursed expenses as deductible for corporate income tax (CIT) purposes?",
        statements: [
            "(1) The credit card is guaranteed by the company",
            "(2) The expenses are supported by proper documents/invoices",
            "(3) The trip is authorised by a decision issued by the company's directors",
            "(4) The company policy allows employees to advance expenses for business trips by personal credit cards"
        ],
        options: [
            "1, 2, 3 and 4",
            "1 and 4 only",
            "2 and 3 only",
            "2, 3 and 4 only"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 111,
        type: "standard",
        question: "NIV Co, a Vietnamese company, rented an office for its operations from 1 April 2025 and paid a deposit of VND792 million, equivalent to two monthly rental fees, inclusive of 10% value added tax (VAT). Rent is payable two months in advance.\nWhat is the amount of deductible rental expense which NIV Co can claim for corporate income tax (CIT) purposes in the year ended 31 October 2025?",
        options: [
            "VND5,040 million",
            "VND2,520 million",
            "VND3,240 million",
            "VND2,772 million"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 112,
        type: "standard",
        question: "In 2025, CSP Co, a Vietnamese company, sold 80% of its 100% shareholding in ADC Co, another Vietnamese company, to a foreign buyer for VND120,000 million. ADC Co was established in 2014 with capital of VND60,000 million (fully paid up). CSP Co purchased all of the shares of ADC Co in 2018 from the original founder for an amount of VND100,000 million, as reflected in the share purchase agreement. The transfer expenses incurred were immaterial.\nWhat is the corporate income tax (CIT) payable by CSP Co on the sale of shares in ADC Co in the year 2025?",
        options: [
            "VND8,000 million",
            "VND3,200 million",
            "VND9,600 million",
            "VND14,400 million"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 113,
        type: "standard",
        question: "SHDL Co is a Vietnamese company. In 2025, the company contributed capital to SBS Co, a newly established company in Vietnam, in the form of an indefinite-term land use right (LUR) for a piece of land in Ho Chi Minh City. The book value of the LUR recorded in SHDL Co's accounts before the contribution was VND100,000 million. The agreed capital contribution value was VND180,000 million. SHDL Co wants to use the maximum period to allocate the revaluation gain from the LUR to other income as allowed under prevailing corporate income tax (CIT) regulations.\nWhat is the taxable income figure in respect of the capital contribution of the land use right (LUR) to SBS Co which SHDL Co should declare on its corporate income tax (CIT) return for the year ended 31 December 2025?",
        options: [
            "VND80,000 million",
            "VND180,000 million",
            "VND8,000 million",
            "VND16,000 million"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 114,
        type: "standard",
        question: "CLT Co is a Vietnamese company employing 1,200 employees in 2025. The company has a policy to provide uniforms to employees in both cash and in kind. In 2025, the total uniform expenses paid by CLT Co was VND12,800 million, of which VND8,000 million was paid in cash to employees. 40% of the expenses in kind are not supported by proper documents.\nHow much of CLT Co's uniform expenses are non-deductible for corporate income tax (CIT) purposes in 2025?",
        options: [
            "VND8,880 million",
            "VND3,920 million",
            "VND9,920 million",
            "VND1,920 million"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 115,
        type: "standard",
        question: "On 1 July 2023, NLAM Co leased an asset for four years and paid the whole rent of VND600 million in advance. On 1 July 2025, NLAM Co decided to shorten the lease period to three years. The company expects that it will have to pay a penalty of VND60 million when it terminates the lease in 2026 in order to receive a refund of one year of the original lease payment.\nWhat is the deductible expense for NLAM Co with regard to the lease in the year ended 31 December 2025?",
        options: [
            "VND150 million",
            "VND75 million",
            "VND165 million",
            "VND170 million"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 116,
        type: "statements_list",
        question: "Which combination of the following statements correctly describes the treatment of foreign exchange gains/losses arising during the construction period of a new company which has no revenue?",
        statements: [
            "(1) Gains and losses must be accounted for separately",
            "(2) Gains and losses can be offset",
            "(3) Gains and losses must be recognised in the year of incurrence",
            "(4) Gains and losses must be deferred and allocated over a period of up to five years from when the project is put into use"
        ],
        options: [
            "1 and 3",
            "1 and 4",
            "2 and 3",
            "2 and 4"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 117,
        type: "standard",
        question: "RETRA Co, a company specialising in developing real estate projects, has an apartment and villa development project in the centre of Hanoi, which is expected to be completed in 2029. The estimated total revenue and profits from this project are VND2,000 billion and VND300 billion, respectively. RETRA Co has been collecting money in advance from customers and in 2025 the total proceeds received were VND200 billion, on which provisional tax of 1% was duly paid on receipt.\nWhat is the taxable income from the project of RETRA Co for the purposes of its 2025 corporate income tax (CIT) finalisation return?",
        options: [
            "VND0 billion",
            "VND30 billion",
            "VND200 billion",
            "VND300 billion"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 118,
        type: "standard",
        question: "The Vietnamese enterprises who have income from overseas have paid CIT or similar CIT tax from overseas.\nWhich of the following statements describe correctly when the Vietnamese enterprises pay CIT in Vietnam?",
        options: [
            "The Vietnamese enterprises deduct all the paid CIT from overseas.",
            "The Vietnamese enterprises deduct all the paid CIT from overseas, but must not exceed the payable CIT in Vietnam.",
            "The Vietnamese enterprises are not allowed to deduct the paid CIT from overseas.",
            "The Vietnamese enterprises do not have to pay tax overseas but pay full CIT in Vietnam."
        ],
        correct: 1,
        explanation: ""
    },
    {
        id: 119,
        type: "standard",
        question: "In the year ended 31 December 2024, DWO Co, a Vietnamese company, wrote off as an expense in its accounting records, an irrecoverable debt of VND 700 million owed by BRK Co when there were signs that BRK Co could not repay it. However, during a tax audit in 2025, the tax authorities denied this write-off because it was not supported by proper evidence. In 2025, DWO Co hired a debt collector and received a first payment of VND 400 million from BRK Co by bank transfer in respect of this debt. DWO Co paid the debt collector a service fee of VND 70 million in cash and recorded the payment from BRK Co and the fee paid to the debt collector as other income and expenses respectively, in calculating its taxable income for 2025.\nWhat is the net adjustment to be made to taxable income in DWO Co's tax return for corporate income tax (CIT) purposes for the year ended 31 December 2025?",
        options: [
            "VND 0 million",
            "VND 330 million",
            "VND 380 million",
            "VND 580 million"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 120,
        type: "standard",
        question: "ABC Co provides a salary provision fund for the year ended 31 December 2024. By the end of 30 June 2025, the company has only spent 70% of the fund.\nWhat is the adjustment for the remaining of the fund?",
        options: [
            "Increase the deductible expenses of 2025",
            "Decrease the deductible expenses of 2025",
            "There is no adjustment because the company has spent over 70% of the fund",
            "Increase the other income"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 121,
        type: "standard",
        question: "NHC Co leases the premises to POM Co as a store for 5 years with the cost of VND 2 billion. According to the contractual agreement, POM will pay an all rental of VND 2 billion to NHC in 2025.\nWhat is the turnover to calculate the taxable income from the leasing activities of NHC during 2025?",
        options: [
            "VND 400 million",
            "VND 1.6 billion",
            "VND 2 billion",
            "NHC can choose between VND 400 million or VND 2 billion"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 122,
        type: "standard",
        question: "In the year ended 31 December 2025, LMK Co made taxable profits of VND 15,000 million from software development activities, which are entitled to the corporate income tax (CIT) incentive rate of 10%; and taxable profits of VND 19,000 million from hardware trading activities, which have no CIT incentive rate. LMK Co also made a loss of VND 7,000 million from securities trading in 2025 and has a trading loss of VND 13,000 million from prior years which can be carried forward up to 2025. However, the trading loss cannot be allocated to any specific business activities.\nWhat is the CIT liability payable by LMK Co for the year ended 31 December 2025 after offsetting all possible losses in accordance with the CIT regulations?",
        options: [
            "VND800 million",
            "VND1,100 million",
            "VND 2,400 million",
            "VND 2,600 million"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 123,
        type: "standard",
        question: "XYZ Co calculates tax as follows:\nRevenue: VND8,000 million\nThe total cost incurred in the period: VND6,000 million\nLoss by revaluation of receivables of foreign currency: VND300 million\nCost for training staff: VND200 million\nXYZ Co is not eligible for CIT incentive.\nWhat is the amount of CIT that XYZ Co has to pay?",
        options: [
            "VND400 million",
            "VND440 million",
            "VND500 million",
            "VND460 million"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 124,
        type: "standard",
        question: "In 2025, company MAC Co purchased materials from supplier Mr. Hai who is households doing business. MAC Co wanted to use the list of goods purchased (without invoices) to claim tax deductible expenses for these purchases.\nWhat is the threshold of annual revenue which households doing business must satisfy for MAC Co to use the list of goods purchased method to claim for the purchases as a tax deductible expense?",
        options: [
            "VND300 million",
            "VND150 million",
            "VND100 million",
            "VND200 million"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 125,
        type: "standard",
        question: "A company recorded in business license a charter capital of VND5 billion, however, the shareholders actually contributed VND4.5 billion. The company has borrowed VND800 million.\nInterest expense of which loan is considered as deductible?",
        options: [
            "VND500 million",
            "VND800 million",
            "VND300 million",
            "VND200 million"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 126,
        type: "standard",
        question: "Which statement is not correct in term of loss relief?",
        options: [
            "Company is allowed to offset loss of real estate activity to the profit of ordinary activities",
            "Company is allowed to offset loss of foreign income to the profit of ordinary activities",
            "Profit of transfer of capital contribution in a company by LUR cannot offset with the loss of ordinary activities",
            "Profit of other income without the sources of ordinary activity cannot offset with the loss of ordinary activities"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 127,
        type: "standard",
        question: "Which of the following taxpayers is not required to pay the corporate income tax?",
        options: [
            "Doctors, lawyers, accountants, auditors, and other individuals having practicing licenses doing business",
            "Foreign enterprises who don't have permanent establishments but having income in Vietnam",
            "Accounting Association having revenue from training activities",
            "University collecting school fees from associated programs with foreign university to send students study overseas"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 128,
        type: "standard",
        question: "Which type of the following expense is not deductible for CIT purpose?",
        options: [
            "Contribution of ACCA membership fee for the accountant",
            "Depreciation of housing built for worker in industry zone",
            "Loss of goods damaged due to storm without insurance",
            "Unrealized exchange loss from revaluation of account receivables"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 129,
        type: "standard",
        question: "Which of the following fixed asset depreciation is not included in deductible expenses when determining taxable income for CIT purposes?",
        options: [
            "Depreciation for fixed assets suspended for 10 months due to seasonal factors.",
            "Depreciation for fixed assets under finance lease.",
            "Depreciation for fixed assets suspended for 6 months due to repairs.",
            "Depreciation for leased assets."
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 130,
        type: "option_table",
        question: "XYZ Co allowed the following amounts in arriving at its draft trade profits of VND60,000 million\nSelect how each item should be treated in the adjustment-to-profits working in order to determine XYZ Co 's final trade profits for tax purposes.",
        optionTable: {
            headers: ["Item", "Add back", "Deduct", "Do not adjust"],
            rows: [
                ["XYZ Co included VND1,090 million relating to the profit on disposal of an item of machinery", "(1) VND1,090 million", "(2) VND1,090 million", "(3) VND 0"],
                ["XYZ Co included an expense of VND21,400 million relating to chief executive director's bonuses and salaries (the directors are also the majority shareholders)", "(4) VND21,400 million", "(5) VND21,400 million", "(6) VND 0"]
            ]
        },
        options: [
            "(1) and (4)",
            "(2) and (4)",
            "(3) and (5)",
            "(3) and (6)"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 131,
        type: "option_table",
        question: "TEC Co deducted the following amounts in arriving at its draft trade profits of VND600,000 million for the year ended 31 December 2025.\nSelect whether an adjustment to profits should be made for each of the following items in order to determine TEC Co's final trade profits for tax purposes.",
        optionTable: {
            headers: ["Item", "Adjust", "Do not adjust"],
            rows: [
                ["VND600 million of ungraded the machines in the production floor", "(1)", "(2)"],
                ["Irrecoverable VAT of VND5,000 million on a company car purchased excess limit 1.6 billion for director's use", "(3)", "(4)"]
            ]
        },
        options: [
            "(1) and (3)",
            "(1) and (4)",
            "(2) and (3)",
            "(2) and (4)"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 132,
        type: "option_table",
        question: "MEB Co charged the following items in arriving at its net profit for the year to 31 December 2025",
        optionTable: {
            headers: ["Item", "VND million"],
            rows: [
                ["Amount written off one item in stock due to it being damaged because of flood", "4,600"],
                ["Cost relating to issue new shares of MEB Co", "15,000"]
            ]
        },
        subQuestion: "What would be the amount of non-deductible expenses when calculating MEB Co 's taxable profits for the year?",
        options: [
            "VND0 million",
            "VND4,600 million",
            "VND15,000 million",
            "VND19,600 million"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 133,
        type: "option_table",
        question: "LEC Co allowed the following amounts in arriving at its draft trading income of VND2,000,000 million.\nSelect how each item should be treated in the adjustment to profits working in order to determine LEC Co's final taxable income.",
        optionTable: {
            headers: ["Item", "Add back", "Deduct", "Do not adjust"],
            rows: [
                ["LEC Co included VND8,000 million relating to the loss on disposal of an item of machinery", "(1) VND8,000 million", "(2) VND8,000 million", "(3) VND 0"],
                ["LEC Co included VND150,000 million relating to redundancy costs (paid to employees who were employed from 2021 to now, received an amount equal to their monthly salary for each working year until resignation)", "(4) VND150,000 million", "(5) VND150,000 million", "(6) VND 0"]
            ]
        },
        options: [
            "(1) and (4)",
            "(2) and (5)",
            "(3) and (4)",
            "(2) and (6)"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 134,
        type: "standard",
        question: "Which of the following items is non-deductible in arriving at taxable income of a company?",
        options: [
            "Unrealised foreign exchange loss on account receivables",
            "Gift of a VND550,000 bottle of wine to a customer",
            "Interest on a loan taken out to purchase shares in another company",
            "Replacement of roof tiles on the company's head office building"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 135,
        type: "option_table",
        question: "TEC Co has accounting profits of VND230,000 million for the year ended 31 December 2025. However, this figure is before the effect of the following items, which were omitted from the financial statements.\nSelect the effect of each item on TEC Co's profits to arrive at taxable incomes.",
        optionTable: {
            headers: ["Item", "Increase", "Decrease", "No effect"],
            rows: [
                ["Qualifying donations to charity", "(1)", "(2)", "(3)"],
                ["Recovery of previously written-off trade debts", "(4)", "(5)", "(6)"]
            ]
        },
        options: [
            "(1) & (5)",
            "(2) & (4)",
            "(3) & (6)",
            "(2) & (6)"
        ],
        correct: 1,
        explanation: ""
    },
    {
        id: 136,
        type: "standard",
        question: "In the same tax period, if a business has income eligible for CIT incentives in different preferences, how do those incentives apply?",
        options: [
            "Apply cumulatively for preferential cases.",
            "Choose a preferential case that is most beneficial to the business.",
            "Choose a preferential case that is most beneficial to the business and to change it once during the incentive period.",
            "It is determined by the tax authority which incentives apply."
        ],
        correct: 1,
        explanation: ""
    },
    {
        id: 137,
        type: "standard",
        question: "POM Co is in the project investment phase from 2025, which is expected to be completed by 2027. During this period, the company does not generate any other business activities. In 2025, the company incurs interest expenses related to loan engagements for investment activities. At the same time, it receives interest income from temporary investment of surplus funds (which are contributed by shareholders). In 2025, interest income is greater than the interest expense.\nWhat is the difference accounted by POM Co?",
        options: [
            "The company should account all income from deposit interest into income from financial activities and calculate corporate income tax payable.",
            "The company offsets income from deposit interest with interest expense from investment activities, the excess is recognized as income from financial activities to calculate corporate income tax payable.",
            "The company offsets income from deposit interest with interest expense from investment activities, the excess is accounted for as a reduction value of the investment project.",
            "There are no correct answers."
        ],
        correct: 2,
        explanation: ""
    },
    {
        id: 138,
        type: "standard",
        question: "In 2025, MAC Co generates revenues from the transfer of land, production of equipment (which enjoys tax incentives), and consulting services of 500 billion, 1000 billion, and 3 billion VND respectively. It also incurs administrative expenses of 7 billion VND and cannot separately account these expenses to each specific activity.\nFor the corporate income tax finalization, how will these administration expenses be calculated?",
        options: [
            "To allocate these expenses to the activity which has the highest revenue.",
            "The expenses are allocated according to the ratio of revenue of the three activities.",
            "The company is not allowed to allocate the administrative expenses to the three activities.",
            "The expenses are allocated as the ratio of the cost of the three activities."
        ],
        correct: 1,
        explanation: ""
    },
    {
        id: 139,
        type: "statements_list",
        question: "Which of the following statements are correct regarding the process of determining an arm's length price between related parties?",
        statements: [
            "(1) The transactions between related parties should be analysed, and compared with, similar transactions with non-related parties (i.e. comparability analysis)",
            "(2) A comparability analysis aims to ensure material difference(s) exist that can impact the prices or profit margins or profit split between related parties",
            "(3) In the case that a material difference(s) exists, such a difference(s) should be analysed and eliminated where possible"
        ],
        options: [
            "1 and 2 only",
            "1, 2 and 3",
            "2 and 3 only",
            "1 and 3 only"
        ],
        correct: 3,
        explanation: ""
    },
    {
        id: 140,
        type: "statements_list",
        question: "Which of the following are source(s) of official databases used by the Vietnamese tax authorities for determining arm's length prices on related party transactions according to Decree 132/2020?",
        statements: [
            "(1) Information and data collected by Vietnamese tax authorities from various taxpayers",
            "(2) Information and data from international suppliers purchased by taxpayers for submission to the tax authorities",
            "(3) Information collected from the exchange of information between Vietnamese tax authorities and overseas tax and other authorities"
        ],
        options: [
            "3 only",
            "1 and 3 only",
            "1, 2 and 3",
            "1 and 2 only"
        ],
        correct: 1,
        explanation: ""
    },
    {
        id: 141,
        type: "statements_list",
        question: "Which of the following statement(s) is / are correct about the taxation principles and administration on related party transactions according to Decree 132/2020?",
        statements: [
            "(1) The tax authorities are authorised to supervise, examine, and inspect the prices in related party transactions according to the principles of arm's length price and substance over form",
            "(2) The tax authorities are authorised to inspect related parties that are in conformity with the arm's length principle, which could result in either a reduction or increase in their tax liabilities.",
            "(3) The tax authorities are entitled to adjust the prices of related party transactions that do not follow the arm's length principle."
        ],
        options: [
            "1 and 3 only",
            "1, 2 and 3",
            "1 only",
            "2 and 3 only"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 142,
        type: "statements_list",
        question: "Which of the following scenarios would make two companies ‘related parties' under Decree 132/2020 with regards to tax administration on enterprises having related party transactions?",
        statements: [
            "(1) Company A is the largest shareholder and holds 11% equity capital, of Company B",
            "(2) Company C indirectly holds 56% equity capital of Company D",
            "(3) Company X is the lender of 60% of the medium and long-term loans of Company Y"
        ],
        options: [
            "1 and 2 only",
            "1, 2 and 3",
            "1 and 3 only",
            "2 only"
        ],
        correct: 3,
        explanation: ""
    },
    {
        id: 143,
        type: "statements_list",
        question: "VTKC Co, based in Vietnam, is a subsidiary of KC Co, a company headquartered in India. In 2023, VTKC entered into the following transactions:",
        statements: [
            "(1) The loan of equipment (free of charge) from KC Co in January 2023 and return of it in November 2023",
            "(2) A cost-sharing agreement with JC Co, another subsidiary of KC Co, based in Singapore, for the development of new products",
            "(3) The lease of equipment from FC Co, a finance-leasing company in India, in which KC Co and its group hold 9% of the shares"
        ],
        options: [
            "1, 2 and 3",
            "1 only",
            "1 and 2 only",
            "2 and 3 only"
        ],
        correct: 2,
        explanation: ""
    },
    {
        id: 144,
        type: "option_table",
        question: "According to Decree 132/2020, ‘Standard arm's length range' is a set of values ranging from a lower percentile to an upper percentile.\nWhat are the lower and upper percentiles for ‘Standard arm's length range' as stipulated in Decree 132/2020?",
        optionTable: {
            headers: ["Option", "Lower", "Upper"],
            rows: [
                ["1", "25th", "75th"],
                ["2", "25th", "65th"],
                ["3", "35th", "75th"],
                ["4", "35th", "65th"]
            ]
        },
        options: ["Option 1", "Option 2", "Option 3", "Option 4"],
        correct: 0,
        explanation: ""
    },
    {
        id: 145,
        type: "statements_list",
        question: "IPV A, B, C and D are four companies incorporated in Vietnam. A holds 80% and 40% of the share capital of B and C respectively. C holds 80% of D.\nWhich of the following statements is/are CORRECT regarding the relationship between the four companies?",
        statements: [
            "(1) B and C are related parties",
            "(2) B and D are NOT related parties",
            "(3) B, C and D are NOT related parties",
            "(4) A and D are related parties"
        ],
        options: [
            "2, 3 and 4",
            "1 and 4",
            "1 only",
            "2 and 3 only"
        ],
        correct: 1,
        explanation: ""
    },
    {
        id: 146,
        type: "option_table",
        question: "The tax authorities in Vietnam review related party transactions performed by taxpayers based on certain fundamental principles.\nWhich of the following combinations of fundamental principles should be considered by the tax authorities when assessing a taxpayer's transactions with related parties, according to Decree 132/2020?",
        optionTable: {
            headers: ["Option", "Fundamental principles 1", "Fundamental principles 2"],
            rows: [
                ["Option 1", "True and fair", "Matching between costs and revenue"],
                ["Option 2", "Arm's length", "Substance over form"],
                ["Option 3", "Substance over form", "Matching between costs and revenue"],
                ["Option 4", "Form over substance", "Arm's length"]
            ]
        },
        options: ["Option 1", "Option 2", "Option 3", "Option 4"],
        correct: 1,
        explanation: ""
    },
    {
        id: 147,
        type: "statements_list",
        question: "Which of the following transactions between a parent company and a subsidiary fall within the scope of related party transactions under Decree 132/2020?",
        statements: [
            "1. The parent company provides a guarantee to the subsidiary for a loan from a commercial bank",
            "2. The subsidiary borrows equipment from the parent company",
            "3. The parent company and the subsidiary enter into an agreement to share costs forresearch and development project to be conducted by the parent company"
        ],
        options: [
            "1 and 2 only",
            "1, 2 and 3",
            "2 and 3 only",
            "1 and 3 only"
        ],
        correct: 1,
        explanation: ""
    },
    {
        id: 148,
        type: "standard",
        question: "THAY Co, a US company, signed a contract with DTT Vietnam (DTT) to provide leadership training to DTT's personnel.\nThe total contract value was USD150,000, which was gross of the corporate income tax and net of the value added tax (VAT) portion of foreign contractor tax (FCT).\nThe contract value was comprised of online training (40%) and physical training in Vietnam (60%). The services were completed, and all amounts duly paid, in the year 2025.\nWhat is the amount of the contract value (rounded to the nearest USD) net of FCT which THAY Co may receive from DTT Vietnam in the year 2025?",
        options: [
            "USD142,500",
            "USD147,000",
            "USD145,500",
            "USD150,00"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 149,
        type: "standard",
        question: "In the year 2025, SLX Co, an Australian company, entered into an agreement with KTC Co, a Vietnamese company, where KTC Co will distribute products of SLX Co in Vietnam.\nThe contract value was USD5 million (net of any tax in Vietnam), with the terms being that delivery would be to CIF Hai Phong port, in Vietnam. KTC Co will bear all the risks and costs of the goods from the border gate of Vietnam.\nSLX Co will determine the selling price of the products in Vietnam and KTC Co will be required to sell the goods at the determined price.\nWhat is the foreign contractor tax liability in Vietnam (rounded to the nearest USD) which KTC Co is required to pay on the transaction?",
        options: [
            "USD0",
            "USD50,505",
            "USD259,836",
            "USD101,520"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 150,
        type: "standard",
        question: "In the year 2025, VPK JSC, a Vietnamese company, issued international bonds in Europe and paid USD3 million to IBC Co, a company in the Netherlands, for the bond management and issuance services in Europe.\nDuring the year 2025, VPK JSC also paid an amount of USD1.5 million to OTP Co, another company in Europe, for advertising VPK JSC's products in Europe.\nBoth amounts are net of foreign contractor tax (FCT) in Vietnam.\nWhat is the corporate income tax portion of FCT (rounded to the nearest USD) that VPK JSC is required to withhold and pay to the tax authority in Vietnam in relation to the transactions outlined?",
        options: [
            "USD0",
            "USD236,842",
            "USD78,947",
            "USD157,895"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 151,
        type: "option_table",
        question: "HTO Co is the Vietnamese owner of a luxury hotel in Vietnam. The hotel management services are provided by MRT Co, an overseas group.\nIn the year 2025, HTO Co paid MRT Co an amount of USD 9 million for hotel management services.\nWhat are the corporate income tax (CIT) and value-added tax (VAT) liabilities (in USD) which HTO Co is required to declare in its foreign contractor tax return concerning the payment to MRT Co?",
        optionTable: {
            headers: ["Option", "CIT (USD)", "VAT (USD)"],
            rows: [
                ["1", "473,684", "498,615"],
                ["2", "498,615", "473,684"],
                ["3", "1,000,000", "526,316"],
                ["4", "1,052,632", "473,684"]
            ]
        },
        options: ["Option 1", "Option 2", "Option 3", "Option 4"],
        correct: 0,
        explanation: ""
    },
    {
        id: 152,
        type: "standard",
        question: "PFT Co is a distributor of electronic products in Vietnam.\nIn the year 2025, PFT Co was the exclusive distributor in Vietnam of specialised gaming devices for SN Co, a Japanese company. The distribution agreement stated that the price of the devices in Vietnam shall be determined by SN Co from time to time, and PFT Co is not allowed to change the quoted price.\nAll tax in Vietnam, if any, will be borne by PFT Co. Advertising for the devices will be conducted globally by SN Co.\nIn the year 2025, PFT Co's revenue from the sales of these devices in Vietnam amounted to USD23 million (equivalent). PFT Co paid an amount of USD20 million to SN Co for the devices.\nWhat is the amount of the corporate income tax portion of foreign contractor tax liabilities in Vietnam (rounded to the nearest USD) that PFT Co would be required to pay on these transactions, assuming SN Co's activities are treated as trading in Vietnam?",
        options: [
            "USD408,163",
            "USD600,000",
            "USD232,323",
            "USD202,020"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 153,
        type: "standard",
        question: "PSL Co is a Vietnamese project owner of a large project in Vietnam.\nIn the year 2025, PSL Co entered into a turnkey contract with KTC Co, a Japanese contractor, for the construction of a factory for PSL Co. KTC Co applied the hybrid method, i.e. declaring value added tax (VAT) under the deduction method and the corporate income tax (CIT) under the deemed method. The contract value is USD20 million, net of taxes, in Vietnam. It was agreed that KTC Co would be responsible for declaring and paying both VAT and CIT portions of foreign contractor tax arising from the contract.\nIn the year 2025, KTC Co issued a VAT invoice and received payments of USD8.8 million inclusive of VAT from PSL Co for the project. During the year 2025, KTC Co incurred input VAT amounting to USD200,000 from local purchases in Vietnam.\nWhat is the amount of corporate income tax portion of foreign contractor tax to be declared and paid by KTC Co (rounded to the nearest USD) in respect of the transactions described in the year 2025?",
        options: [
            "USD167,347",
            "USD163,265",
            "USD179,592",
            "USD160,000"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 154,
        type: "standard",
        question: "DKN Co (DKN), a Chinese construction company, using the hybrid method for foreign contractor tax (FCT), entered into a contract with a Vietnamese company for a construction project valued at USD30 million (gross of FCT).\nDKN subcontracted works to two companies in Thailand, Company B and Company Y, worth the values of USD 12 million and USD8 million respectively. Company Y adopts the deemed method, whilst Company B adopts the actual method (direct filing as a company in Vietnam) for FCT.\nDKN also purchased goods equivalent to USD3 million from Vietnamese suppliers for the project.\nWhat is the taxable revenue for FCT purposes (corporate income tax portion) that should be declared by DKN Co in relation to the project described (assuming all subcontracted works were properly registered)?",
        options: [
            "USD 7 million",
            "USD 19 million",
            "USD 30 million",
            "USD 18 million"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 155,
        type: "standard",
        question: "X Co is a Vietnamese subsidiary of FWD Co, a foreign forwarder.\nIn the year 2025, X Co allocated a fee of USD 600,000 (net of all foreign contractor tax) collected from Vietnamese clients to FWD Co for international forwarding activities (treated as transportation) in relation to those Vietnamese clients.\n55% of these activities were for deliveries from Vietnam to overseas, and the remaining are related to deliveries from overseas to Vietnam.\nWhat is the amount of the corporate income tax portion of the foreign contractor tax liabilities (rounded to the nearest USD) that X Co would be required to pay on behalf of FWD Co from the described transactions?",
        options: [
            "USD6,600",
            "USD5,400",
            "USD6,735",
            "USD5,510"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 156,
        type: "option_table",
        question: "9. HBO Co is the owner of a luxury hotel in Vietnam. HBO Co engaged MGT Co, a company headquartered in Europe, for its hotel management services. According to the management contract, value added tax (VAT) would be borne by HBO Co and the corporate income tax portion of foreign contractor tax would be borne by MGT Co.\nIn the year 2025, MGT Co received payment of USD5 million from HBO Co for hotel management services fee.\nWhat are the VAT and corporate income tax (CIT) liabilities (in USD) which should be declared in the foreign contractor tax return to be filed by HBO Co in respect of the hotel management services fee paid to MGT Co in the year 2025?\nDuring January and February 2025, the market price of a cleaner sold by PLS Co was VND6.6 million, inclusive of 10% value-added tax (VAT).\nWhat is the amount of output VAT payable by PLS Co to the tax authority in January and February 2025?",
        optionTable: {
            headers: ["Option", "VAT", "CIT"],
            rows: [
                ["1", "263,158", "250,000"],
                ["2", "263,158", "500,000"],
                ["3", "250,000", "555,556"],
                ["4", "250,000", "263,158"]
            ]
        },
        options: ["Option 1", "Option 2", "Option 3", "Option 4"],
        correct: 0,
        explanation: ""
    },
    {
        id: 157,
        type: "option_table",
        question: "10. SGT Co is a trading company in Singapore. In the year 2025, SGT Co entered into a contract with AHD Co, a Vietnamese company, in which SGT Co purchased goods from AHD Co with a value of USD4.5 million. At the same time, SGT Co sold the goods to NKT Co, a company established in Vietnam for USD5 million (net of Foreign Contractor Tax (FCT)).\nSGT Co instructed AHD Co to hand over the goods directly to NKT Co in Vietnam. The activity is viewed as an 'on the spot export' by SGT Co and is treated as a 'trading in Vietnam' transaction for FCT purposes.\nWhat is the amount of FCT that would occur from the transactions between SGT Co, AHD Co and NKT Co in the year 2025, and which party would be responsible for the FCT declaration, if any?",
        optionTable: {
            headers: ["Option", "FCT USD", "Party to declare"],
            rows: [
                ["1", "0", "No declaration needed"],
                ["2", "45,455", "AHD Co"],
                ["3", "50,505", "NKT Co"],
                ["4", "100,000", "SGT Co"]
            ]
        },
        options: ["Option 1", "Option 2", "Option 3", "Option 4"],
        correct: 0,
        explanation: ""
    },
    {
        id: 158,
        type: "standard",
        question: "SVO Co is a Korean company which has entered into a contract for the supply and installation of equipment to VSC Co, a Vietnamese company.\nThe contract price is USD10 million, inclusive of all foreign contractor tax (FCT).\nSVO Co subcontracted all the equipment to a Vietnamese subcontractor at a supply value amounting to 70% of the contract price; but performed the installation services itself.\nWhat is the total amount of FCT (including corporate income tax and value added tax (VAT)) liabilities that would arise on SVO Co from the transactions?",
        options: [
            "USD519,672",
            "USD494,000",
            "USD292,500",
            "USD324,100"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 159,
        type: "standard",
        question: "KZ Co is a company headquartered in the United States in the year 2025, KZ Co entered into a contract with LTC Co, a company in Vietnam, to provide supervision services for a construction project in Vietnam.\nThe contract value specified that LTC Co would pay KZ Co USD1.200.000, net of foreign contractor tax (FCT) in Vietnam, for the services provided. The full contract value was settled in the year 2025.\nLTC Co also arranged accommodation for the personnel of KZ Co valued at USD45,000.\nIn respect of the transactions between LTC Co and KZ Co, what is the amount (rounded to the nearest USD) of the value added tax (VAT) portion of the FCT liability that LTC Co should declare on its FCT return in the year 2025?",
        options: [
            "USD65,526",
            "USD63,158",
            "USD66,482",
            "USD68,975"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 160,
        type: "option_table",
        question: "13. A foreign airline, TKA, has a booking office in Vietnam. In the year 2025, TKA recorded the following from its activities in Vietnam (all amounts are gross of tax):\n• Revenue from air fares for passengers (inclusive of airport charges): USD2,500,000\n• Collection of airport charges on behalf of the State (and paid over to the State): USD200,000\n• Refund of air fares to passengers: USD600,000\n\nWhat are the amounts of taxable revenue and the CIT portion of foreign contractor tax (FCT) that TKA is required to pay to the Vietnamese tax authorities in the year 2025?",
        optionTable: {
            headers: ["Option", "Taxable revenue USD", "FCT (CIT portion) USD"],
            rows: [
                ["1", "2,100,000", "0"],
                ["2", "2,300,000", "46,000"],
                ["3", "1,700,000", "34,000"],
                ["4", "1,900,000", "38,000"]
            ]
        },
        options: ["Option 1", "Option 2", "Option 3", "Option 4"],
        correct: 0,
        explanation: ""
    },
    {
        id: 161,
        type: "option_table",
        question: "14. In TKT Co is a Japanese company that has entered into a contract to supply and install specialized machinery and equipment to VKF Co, a Vietnamese company.\nThe contract price is a lump sum amount of USD 20 million, inclusive of foreign contractor tax (FCT).\nWhat are the corporate income tax (CIT) and value added tax (VAT) portions under FCT that VKF Co should withhold from TKT Co for the above transactions?",
        optionTable: {
            headers: ["Option", "CIT USD", "VAT USD"],
            rows: [
                ["1", "408,163", "631,180"],
                ["2", "420,787", "618,557"],
                ["3", "388,000", "600,000"],
                ["4", "400,000", "588,000"]
            ]
        },
        options: ["Option 1", "Option 2", "Option 3", "Option 4"],
        correct: 0,
        explanation: ""
    },
    {
        id: 162,
        type: "standard",
        question: "MZ Co is a Singaporean company with no presence in Vietnam. In late 2023, MZ Co entered into an agreement to sell luxury watches in the Vietnamese market via its exclusive distributor, AG Co. MZ Co would determine the price of the watches depending on international trends and market conditions.\nIn the year 2025, the revenue from the sales of MZ Co's watches by AG Co in the Vietnamese market amounted to VND50,000 million.\nDuring the year 2025, AG Co also advanced an amount equivalent to VND2,000 million for advertising in Vietnam, which was duly reimbursed by MZ Co in the same year.\nWhat is the corporate income tax portion of the foreign contractor tax (FCT) liability that AG Co should declare on its FCT return in the year 2025 for the above transactions, assuming the contract is silent on which party would bear the withholding tax?",
        options: [
            "VND520 million",
            "VND0",
            "VND480 million",
            "VND500 million"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 163,
        type: "option_table",
        question: "16. In 2025, FFC Co (a foreign company) provided VNT Co (a Vietnamese company) with consultancy services for a digital transformation strategy for VNT Co in Vietnam. The contract price was USD1.8 million of which foreign contractor tax would be borne by VNT Co. In addition, VNT Co would also bear airfares and accommodation costs for experts from FFC Co during the contract's execution, amounting to USD 120,000.\nWhat are the amounts of corporate income tax (CIT) and value-added tax (VAT) in USD (rounded to 0 decimals) that VNT Co is required to pay in respect of the above contract?",
        optionTable: {
            headers: ["Option", "CIT", "VAT"],
            rows: [
                ["1", "94,737", "99,723"],
                ["2", "106,371", "101,053"],
                ["3", "101,053", "106,371"],
                ["4", "99,723", "94,737"]
            ]
        },
        options: ["Option 1", "Option 2", "Option 3", "Option 4"],
        correct: 0,
        explanation: ""
    },
    {
        id: 164,
        type: "standard",
        question: "17. In March 2020, LBC Co, a Vietnamese company, borrowed USD20 million from a foreign bank at an interest rate of 5% per annum for five years. LBC Co will bear any foreign contractor tax (FCT) on the interest. It is specified in the loan agreement that, where LBC Co cannot repay the loan on the specified date, LBC Co would be subject to late payment interest at 8% per annum gross of FCT. In October 2025, LBC Co paid back the loan plus the annual interest, together with USD1.12 million for late payment interest.\nWhat is the amount of corporate income tax payable by LBC Co on the foreign contractor tax concerning the above transactions in the year 2025?",
        options: [
            "USD 52,632",
            "USD 111,579",
            "USD 106,000",
            "USD 223,111"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 165,
        type: "standard",
        question: "18. RLS Co, a Vietnamese company, signed a two-year contract on 1 August 2025 with ADV Co, a Singapore-based company. According to the contract, ADV Co is to lease an item of equipment to RLS Co for an annual rental of USD 360,000, to be paid in advance. The rental is net of any tax in Vietnam.\nWhat is the amount (in USD) of the corporate income tax portion of foreign contractor tax that RLS Co would be liable to pay in Vietnam in the year 2025, based on the above contract with ADV Co?",
        options: [
            "USD 0",
            "USD 7,895",
            "USD 18,947",
            "USD 7,500"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 166,
        type: "standard",
        question: "19. In June 2025, TLP Co, a Vietnamese company operating in the field of industrial parks development, signed a contract with ADV Co, a Singaporean company. Under the terms of the contract, ADV Co advertises TLP Co's industrial parks premises in Vietnam as being available to lease to Asian investors outside Vietnam. The advertising services are carried out fully online. According to the contract, TLP Co must pay an annual fee to ADV Co of USD600,000, net of tax, in four equal installments in June, September, December and March.\nWhat is the amount of the corporate income tax portion of foreign contractor tax (rounded to 0 decimals) which TLP Co is required to pay in the year 2025 for the above transactions?",
        options: [
            "USD0",
            "USD22,500",
            "USD31,579",
            "USD23,684"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 167,
        type: "standard",
        question: "20. In January 2025, iNV Co, a foreign fund based in Hong Kong, purchased one million shares of HKT JSC, a Vietnamese company whose shares are listed on the Vietnamese stock exchange. iNV Co purchased the shares at a price of VND45,000 per share, via its securities broker in Vietnam. In July 2025, iNV Co sold 60% of these shares at a price of VND60,000 per share.\nWhat is the amount of the corporate income tax portion of foreign contractor tax which iNV Co should have withheld from the sale of HKT JSC's shares in July 2025?",
        options: [
            "VND0",
            "VND1,800 million",
            "VND60 million",
            "VND36 million"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 168,
        type: "option_table",
        question: "21. VNC Co, a Vietnamese company, is the owner of a five-star hotel in Vietnam. VNC Co signed a contract with MCP Co, a Swiss company, for hotel management services. The contract provides that MCP Co is responsible for the corporate income tax (CIT) portion of the foreign contractor tax (FCT), and VNC Co for the value added tax (VAT) portion of the FCT. In 2025, MCP Co issued an invoice of USD4.5 million to VNC Co for the services fee and received payment in 2025.\nWhat is the amount (rounded to nearest VND million) of the CIT and VAT portions of FCT which VNC Co should declare in its FCT return in respect of the service fee invoiced by MCP?",
        optionTable: {
            headers: ["Option", "CIT\nVND million", "VAT\nVND million"],
            rows: [
                ["1", "11,750", "6,184"],
                ["2", "5,921", "11,250"],
                ["3", "5,288", "5,921"],
                ["4", "11,925", "6,276"]
            ]
        },
        options: ["Option 1", "Option 2", "Option 3", "Option 4"],
        correct: 0,
        explanation: ""
    },
    {
        id: 169,
        type: "standard",
        question: "23. Paramont Co, a company registered in Turkey, entered into a turnkey contract with a Vietnamese company, Company Q, for construction of a factory in Vietnam at a contract value of USD20 million (gross of tax in Vietnam). Paramont Co adopted the deemed method for foreign contractor tax filing in Vietnam. Paramont Co purchased goods with a value of USD6 million from Vietnamese suppliers for the contract. Paramont Co also subcontracted 20% and 25% of the total contract value respectively to AYE, a company in Vietnam and BEE, a Chinese sub-contractor which also adopted the deemed method for tax filing in Vietnam.\nWhat is the amount of taxable revenue which Company Q will declare for foreign contractor tax purposes on behalf of Paramont Co assuming all sub-contractors were clearly stated in the contract?",
        options: [
            "USD11 million",
            "USD5 million",
            "USD15 million",
            "USD16 million"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 170,
        type: "standard",
        question: "24. In June 2024, ITS Co, a Vietnamese finance company, entered into a three-year interest swap agreement with FB, a foreign bank. Under the agreement, there are two settlements each year, the first in March and the second in September. In 2025, ITS Co received USD200,000 from FB in the March settlement, and paid USD280,000 to FB in the September settlement. All taxes in Vietnam are borne by ITS Co.\nWhat is the amount of corporate income tax portion of foreign contractor tax which ITS Co is subject to in 2025 in relation to the above transactions?",
        options: [
            "USD1,600",
            "USD1,633",
            "USD5,714",
            "USD4,082"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 171,
        type: "standard",
        question: "25. ONG Co is a Malaysian oil contractor carrying out an oil and gas project in Vietnam. PVN is the Vietnamese party for the project. ONG Co applied for a tax registration certificate in June 2025 as it satisfies the conditions to apply the deduction method for the value added tax (VAT) portion of foreign contractor tax (FCT). The certificate was issued to ONG Co on 20 June 2025. On 25 June 2025, ONG Co issued a VAT invoice to PVN for USD473,000 (inclusive of VAT at 10%). The input VAT incurred by ONG Co for local purchases, all supported by invoices, was USD15,000 for the period before 20 June 2025, and USD22,000 for the period from 21 to 30 June 2025.\nWhat is the total VAT portion of the FCT liability which ONG Co should declare in June 2025?",
        options: [
            "USD21,000",
            "USD43,000",
            "USD6,000",
            "USD25,300"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 172,
        type: "standard",
        question: "26. VNT Co is a Vietnamese company acting as an agent for XLS Co, a Singapore-based maritime transportation company. In 2025, XLS Co instructed VNT Co to hire a Vietnamese vessel for VND470 million to transport cargo from XLS Co's client in Vietnam to Singapore. The cargo was transhipped in Singapore and then transported to Brazil in XLS Co's own vessels. The gross freight for transportation from Vietnam to Brazil, agreed with XLS Co's Vietnamese client, is USD180,000.\nWhat is the corporate income tax portion of foreign contractor tax (in VND millions equivalent) which XLS Co is subject to in relation to the above transportation activity?",
        options: [
            "VND84.60 million",
            "VND86.00 million",
            "VND76.73 million",
            "VND86.33 million"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 173,
        type: "standard",
        question: "27. TTT Co is a UK company which offers training for executives. In 2025, the company entered into an agreement with CLD Co, a company located in Vietnam, for the training of CLD Co's management team, for a net-of-tax fee of USD300,000. According to the contract, TTT Co would send trainers to CLD Co's office in Vietnam to deliver ten modules of equal value. However, TTT Co trainers only conducted seven of the modules on-site with the remaining three modules being conducted online by TTT Co.\nWhat is the corporate income tax portion of foreign contractor tax (FCT) liability which CLD Co should declare in its FCT return in 2025 in respect of the training by TTT Co?",
        options: [
            "USD15,000",
            "USD10,500",
            "USD15,789",
            "USD11,053"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 174,
        type: "standard",
        question: "28. In 2025, LMC Co, a Singapore-based company, signed a turnkey contract to construct a factory (including construction materials) for PQR Co, a Vietnamese company. The turnkey contract price was USD20 million, gross of corporate income tax (CIT) at 2% but net of value added tax (VAT). LMC Co purchased materials valued at USD8 million from Vietnamese suppliers to use in the contract.\nWhat is the amount (in VND millions) of the CIT portion of foreign contractor tax (FCT) that LMC Co would be liable for in relation to the contract with PQR Co, assuming LMC Co applied the hybrid method for FCT declaration?",
        options: [
            "VND5,640 million",
            "VND9,592 million",
            "VND5,755 million",
            "VND10,600 million"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 175,
        type: "option_table",
        question: "29. DEU Co, a Chinese company, signed a contract in 2025 for the supply and installation of machinery and equipment to VSTP Co, a Vietnamese project owner. The total contract value was USD1.3 million, gross of value added tax (VAT) and corporate income tax (CIT). DEU Co subcontracted all of the material and equipment supply with a value of USD1 million to a Vietnamese subcontractor and only performed the installation activities itself.\nWhat are the amounts (in USD) of VAT and the CIT portion of foreign contractor tax (FCT) which DEU Co would be subject to in relation to the above contract with VSTP Co?",
        optionTable: {
            headers: ["Option", "CIT", "VAT"],
            rows: [
                ["Option 1", "USD15,000", "USD0"],
                ["Option 2", "USD14,250", "USD15,000"],
                ["Option 3", "USD15,000", "USD14,250"],
                ["Option 4", "USD0", "USD15,000"]
            ]
        },
        options: ["Option 1", "Option 2", "Option 3", "Option 4"],
        correct: 0,
        explanation: ""
    },
    {
        id: 176,
        type: "standard",
        question: "30. VXN EXD Co is a Singapore-based company providing express delivery services. The company entered into a contract with AGD Co, a Vietnamese company, for AGD Co to act as the exclusive agent of EXD Co in Vietnam. AGD Co bears all foreign contractor tax (FCT) in Vietnam under the contract. In 2025, AGD Co remitted fees of USD900,000 to EXD Co for services to Vietnamese clients. Of this amount, 40% related to shipping from overseas to Vietnam, and the remaining balance was for shipping from Vietnam to overseas. The activities of EXD Co are treated as ‘services' for FCT purposes.\nWhat is the corporate income tax (CIT) portion of the FCT which AGD Co should declare in its FCT return in 2025 in respect of the contract with EXD Co?",
        options: [
            "USD28,421",
            "USD18,947",
            "USD27,000",
            "USD18,000"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 177,
        type: "standard",
        question: "31. In 2025, NWC Co, a company incorporated in Vietnam, entered into a contract with OSL Co, a foreign company incorporated outside Vietnam, to purchase a specialized robot for USD 1 million. The price is net of all withholding tax in Vietnam. The terms of delivery for the robot were cost, insurance, freight (CIF) to Hai Phong Port, Vietnam. The title and risk to the goods would be transferred at the uploading port in Singapore. According to the contract, OSL Co would not provide any services, except for the guarantee and replacement of the robot within two years in case of defects (the robot will be shipped back to Singapore for fixing or replacement). NWC Co settled the full contract amount in 2025.\nWhat is the amount of the foreign contractor tax (FCT), under the deemed method for the fiscal year 2025, which NWC Co is required to pay in relation to the contract amount paid to OSL Co?",
        options: [
            "USD 10,161",
            "USD 10,000",
            "USD 51,967",
            "USD 0"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 178,
        type: "option_table",
        question: "32. In 2025, STP Co, a company incorporated in France, won a bid from PSL Co, a company incorporated in Vietnam, to supervise the construction of PSL Co's factory in Vietnam. The supervision fee under the contract was USD 650,000, inclusive of corporate income tax (CIT) and exclusive of value-added tax (VAT). To implement the contract, STP Co purchased goods and services equivalent to USD 50,000 from local suppliers.\nWhat is the amount of foreign contractor tax (FCT) corporate income tax (CIT) and value-added tax (VAT) in USD, which STP Co would be subject to in respect of the project in Vietnam in the fiscal year 2025?",
        optionTable: {
            headers: ["Option", "CIT", "VAT"],
            rows: [
                ["Option 1", "USD 34,211", "USD 36,011"],
                ["Option 2", "USD 30,000", "USD 31,579"],
                ["Option 3", "USD 31,579", "USD 33,241"],
                ["Option 4", "USD 32,500", "USD 34,211"]
            ]
        },
        options: ["Option 1", "Option 2", "Option 3", "Option 4"],
        correct: 0,
        explanation: ""
    },
    {
        id: 179,
        type: "standard",
        question: "33. APL Co is a company incorporated in Singapore to distribute branded mobile phones. In 2025, APL Co sold 5,000 phones to VTD Co, a retail company incorporated in Vietnam, at a unit price of USD 600 (terms of delivery free on board (FOB) Singapore port, net of any tax in Vietnam). The contract specifies that the selling price of the phones in Vietnam shall be determined by APL Co and that APL Co will not carry out any services in relation to the phones in Vietnam. VTD Co is authorised to conduct advertising activities for the phones in Vietnam at the expense of APL Co. In 2025, VTD Co incurred advertising costs of VND 1,175 million, which were offset against the amount payable to APL Co. All payments were settled in full in the year ended 31 December 2025.\nWhat is the amount of corporate income tax (CIT) as a portion of the foreign contractor tax (FCT) liability which VTD Co should declare on behalf of APL Co from the trading transactions in the fiscal year 2025?",
        options: [
            "USD 29,798",
            "USD 30,000",
            "USD 0",
            "USD 30,303"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 180,
        type: "standard",
        question: "34. In 2025, MHT Co, a Japanese company, signed a contract to supply and install equipment for PCR Co, a Vietnamese company. The contract price was USD2 million gross of value added tax (VAT) and corporate income tax (CIT). MHT Co purchased goods relating to this contract, valued at USD0.50 million, from Vietnamese suppliers.\nWhat is the amount (in USD) of the corporate income tax (CIT) portion of foreign contractor tax (FCT) which PCR Co would be required to withhold on the above contract with MHT Co, assuming MHT Co applied the deemed method for FCT declaration?",
        options: [
            "USD29,100",
            "USD40,816",
            "USD30,612",
            "USD38,800"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 181,
        type: "standard",
        question: "35. SIV Co is a Singapore company. In 2018, the company purchased shares in LST JSC, an unlisted Vietnamese joint stock company, for VND22,000 million (equivalent to USD1 million at that time). In 2025, when LST JSC's shares were listed on the Vietnamese stock exchange, SIV Co sold the entire shareholding for USD2 million.\nWhat is the amount of tax (in VND million) which should be deducted before the proceeds from the sale of the shares can be remitted overseas to SIV Co?",
        options: [
            "VND53 million",
            "VND5,000 million",
            "VND25 million",
            "VND4,700 million"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 182,
        type: "standard",
        question: "36. PNLT Co, a foreign contractor from Denmark, entered into a contract for construction of a factory in Vietnam and applied the deemed method for declaring foreign contractor tax (FCT). The works were completed in 2024, however, there were some disputes between PNLT Co, its suppliers and the project owner. When the disputes were settled in 2025, PNLT Co received contractual compensation of USD500,000 from its suppliers, but had to pay contractual compensation of USD320,000 to the project owner. Compensation is treated as ‘other business activities' for corporate income tax (CIT) purposes.\nWhat is the amount of corporate income tax (CIT) as a portion of the foreign contractor tax (FCT) liability incurred by PNLT Co in Vietnam in 2025, if the company's policy is to minimise tax under current regulations?",
        options: [
            "USD0",
            "USD10,000",
            "USD36,000",
            "USD3,600"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 183,
        type: "standard",
        question: "37. RED Co, a Vietnamese real estate developer, signed a contract in May 2025 with TLA Co, a Hong Kong company. The contract was for TLA Co to provide advertising and intermediary services to Hong Kong investors to purchase apartments developed by RED Co in Vietnam. TLA Co's services are carried out partly in Vietnam and partly in Hong Kong. According to the contract, RED Co is required to pay a fixed fee of USD200,000 (net of any tax in Vietnam) to TLA Co for 12 months of services, payable in two equal instalments in March and September.\nWhat is the amount (in USD) of the corporate income tax (CIT) portion of foreign contractor tax (FCT) RED Co would be liable to pay in Vietnam in 2025 based on the above contract with TLA Co?",
        options: [
            "USD10,526",
            "USD5,540",
            "USD0",
            "USD5,263"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 184,
        type: "standard",
        question: "38. TCD Co, an Australian company, signed a contract with HMC Co, a Vietnamese company, for TCD Co to provide consultancy skills training for HMC Co's staff in 2025. The value of the training agreement was USD100,000, gross of corporate income tax (CIT) and net of the value added tax (VAT) portion of foreign contractor tax (FCT). The contract value was made up of online courses (20%), whilst the remaining 80% was attributable to training courses which took place in Vietnam. HMC Co settled the contract value in full in 2025.\nWhat is the amount (in USD), net of foreign contractor tax (FCT), TCD Co can receive from HMC Co in respect of the above training agreement during the year 2025?",
        options: [
            "USD95,000",
            "USD94,737",
            "USD98,947",
            "USD96,000"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 185,
        type: "standard",
        question: "39. XAL Co is a foreign airline which has an office in Vietnam to sell airfares. In the fourth quarter of 2025, XAL Co earned gross revenue, i.e. before the deduction of any charges or refunds, of USD250,000, based on receipts and records. Of this amount, USD200,000 was for passenger transportation, and the remaining amount related to cargo transportation. Airport charges of USD5,000 were collected from these fares on behalf of the domestic airports. XAL Co also paid refunds of USD7,000 to passengers who returned their fares during the quarter.\nWhat is the total amount of taxable income (in USD) which XAL Co should declare for the corporate income tax (CIT) portion of the foreign contractor tax (FCT) in the fourth quarter of 2025?",
        options: [
            "USD188,000",
            "USD238,000",
            "USD245,000",
            "USD193,000"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 186,
        type: "standard",
        question: "40. In July 2021, MGT Co borrowed USD10 million from a foreign bank at an interest rate of 5% per annum for four years (MGT will bear any FCT on the interest). It is specified in the loan agreement that where MGT cannot repay the loan on the specified date, MGT would be subject to late payment interest. In October 2025, MGT paid back the loan plus USD250,000 interest and USD40,000 for late payment interest.\nWhat is the amount of the CIT portion of FCT (rounded to 0 decimal) to be declared and paid by MGT Co for the above transaction?",
        options: [
            "USD13,300",
            "USD14,500",
            "USD13,974",
            "USD32,222"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 187,
        type: "statements_list",
        question: "41. Which of the following scenarios is the foreign company subject to foreign contractor tax (FCT) in Vietnam?",
        statements: [
            "1) A company, established in Laos, which transferred the right to develop a project in Vietnam to a Vietnamese company.",
            "2) A company in China which sold equipment to a company in Vietnam with a one-year warranty clause in the contract stating that the risks to the equipment are transferred at the China's port.",
            "3) A company in Thailand which received compensation from a Vietnamese company for late delivery of goods.",
            "4) A company in Singapore which signed a contract to buy garment products from TXT Co, a Vietnamese company, and instructed TXT Co to deliver the garments to PCS Co, another Vietnamese company, under the on-the-spot import-export mechanism."
        ],
        options: [
            "1, 2, 3 and 4",
            "2 and 4 only",
            "2 and 3 only",
            "1, 3 and 4 only"
        ],
        correct: 3,
        explanation: ""
    },
    {
        id: 188,
        type: "statements_list",
        question: "42. Which of the following transactions would be subject to foreign contractor tax (FCT) in Vietnam?",
        statements: [
            "(i) Repair of a Vietnamese internet cable offshore",
            "(ii) Online training for the employees of a Vietnamese company where the server is hosted overseas",
            "(iii) An intermediary arrangement for a Vietnamese company to provide services in Singapore",
            "(iv) Granting of rights to a Vietnamese company to use the international brand name of a world-famous product in Vietnam"
        ],
        options: [
            "(i) and (ii)",
            "(ii) and (iv)",
            "(i) and (iii)",
            "(iii) and (iv)"
        ],
        correct: 1,
        explanation: ""
    },
    {
        id: 189,
        type: "option_table",
        question: "43. Amtra Co, a Chinese company, signed a contract with a Vietnamese project owner for the supply, installation, and testing of a compressor system. Amtra Co subcontracted all the compressor supply value to a Vietnamese subcontractor HNC Company and performed the installation and testing activities itself for the project.\nWhat would be the foreign contractor tax (FCT) rates applicable to Amtra Co under the deemed method?",
        optionTable: {
            headers: ["Option", "Corporate income tax (CIT)", "Value added tax (VAT)"],
            rows: [
                ["A", "2%", "3%"],
                ["B", "5%", "5%"],
                ["C", "1%", "Exempt"],
                ["D", "10%", "Exempt"]
            ]
        },
        options: ["A", "B", "C", "D"],
        correct: 0,
        explanation: ""
    },
    {
        id: 190,
        type: "option_table",
        question: "44. SIN Co, a foreign company based in Singapore, hired space in a bonded warehouse in Vietnam. The storage space was used for:\n• the temporary storage of materials for VNM Co, a Vietnamese company, prior to their further processing by VNM Co\n• the storage of finished goods for other companies in Vietnam prior to their distribution in Vietnam.\nIn the case of the finished goods, the costs of transportation from the bonded warehouse to the distributors' warehouse in Vietnam was paid for by the distributors but reimbursed by SIN Co.\nWhat is the Vietnamese foreign contractor tax (FCT) implications for SIN Co from the above transactions?",
        optionTable: {
            headers: ["Option", "With VNM Co", "With other distributors"],
            rows: [
                ["A", "Subject to FCT", "Subject to FCT"],
                ["B", "Subject to FCT", "Not subject to FCT"],
                ["C", "Not subject to FCT", "Subject to FCT"],
                ["D", "Not subject to FCT", "Not subject to FCT"]
            ]
        },
        options: ["A", "B", "C", "D"],
        correct: 0,
        explanation: ""
    },
    {
        id: 191,
        type: "standard",
        question: "45. THA Co, which is located in Thailand, delivers electronic items to a Vietnamese company and authorizes VNM Co to perform some services, such as delivery, distribution, marketing, advertising for selling electronic products, while THA Co is still the owner of goods delivered to VNM Co. Although they still take responsibility for the cost and quality of the product, THA Co imposes selling prices for electronic products.\nWhich of the following is the correct statement about FCT responsibility in this case?",
        options: [
            "THA Co is subject to FCT",
            "VNM Co is subject to FCT",
            "THA Co is not subject to FCT",
            "No party is subject to FCT"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 192,
        type: "standard",
        question: "46. PCP Co, which is located in Vietnam, signs a contract to import computers and speakers with MON Co who is located overseas. Goods are delivered at a Vietnam's border gate.\nMON Co bears all responsibility and costs related to the goods until they arrive at the Vietnam's border gate; PCP bears responsibility and costs related to the receipt and transport of goods from the Vietnam's border gate.\nThe contract prescribes that the goods come with a one-year warranty by MON Co. Other than that, MON Co does not provide any services related to such goods in Vietnam.\nWhich of the following is the correct statement about FCT responsibility in this case?",
        options: [
            "MON Co is subject to FCT because of one-year warranty service",
            "MON Co is subject to FCT because goods are delivered at a Vietnam's border gate",
            "MON Co is subject to FCT because MON Co bears all responsibility and costs related to the goods until they arrive at the Vietnam's border gate",
            "MON Co is not subject to FCT"
        ],
        correct: 3,
        explanation: ""
    },
    {
        id: 193,
        type: "standard",
        question: "47. HKC Co of Hong Kong provides material handling services at a port in Hong Kong for VXN Co in Vietnam. VXN Co pays HKC Co for material handling services at the Hong Kong port.\nWhich of the following is the correct statement about FCT responsibility in this case?",
        options: [
            "HKC Co is subject to FCT because it provides service to VXN Co",
            "VXN Co is subject to FCT because it pays HKC Co",
            "HKC Co is not subject to FCT",
            "Both HKC Co and VXN Co are not subject to FCT"
        ],
        correct: 2,
        explanation: ""
    },
    {
        id: 194,
        type: "option_table",
        question: "48. VNC Co, a Vietnamese Company signs a contract with SJC Company in Singapore according to which SJC will\n(i) run advertisements for sale of products of VNC Co in Singapore market, and\n(ii) run advertisements on the internet for sale of products in the Japan market.\nVNC Co Company will pay SJC in Singapore for advertising services.\nWhat is the Vietnamese foreign contractor tax (FCT) implications for SJC Co's advertisement services?",
        optionTable: {
            headers: ["Option", "(i)", "(ii)"],
            rows: [
                ["A", "Subject to FCT", "Subject to FCT"],
                ["B", "Not subject to FCT", "Not subject to FCT"],
                ["C", "Subject to FCT", "Not subject to FCT"],
                ["D", "Not subject to FCT", "Subject to FCT"]
            ]
        },
        options: ["A", "B", "C", "D"],
        correct: 1,
        explanation: ""
    },
    {
        id: 195,
        type: "option_table",
        question: "49. EST, a Vietnamese real estate company, signs a contract to hire TWA company in Taiwan as a broker. TWA will (i) promote and introduce EST's product in Taiwan market, and (ii) support to sales EST's product in Vietnam.\nWhat is the Vietnamese foreign contractor tax (FCT) implications for EST Co's broking services?",
        optionTable: {
            headers: ["Option", "(i)", "(ii)"],
            rows: [
                ["A", "Subject to FCT", "Subject to FCT"],
                ["B", "Not subject to FCT", "Not subject to FCT"],
                ["C", "Subject to FCT", "Not subject to FCT"],
                ["D", "Not subject to FCT", "Subject to FCT"]
            ]
        },
        options: ["A", "B", "C", "D"],
        correct: 3,
        explanation: ""
    },
    {
        id: 196,
        type: "option_table",
        question: "50. HAN Co, operating in education in Vietnam, signs a contract with TEC University of Thailand (i) for the provision of training for Vietnamese lecturers at TEC University, and (ii) to provide training for Vietnamese trainers in Vietnam in the form of online training.\nWhat is the Vietnamese foreign contractor tax (FCT) implications for HAN Co's training services?",
        optionTable: {
            headers: ["Option", "(i)", "(ii)"],
            rows: [
                ["A", "Subject to FCT", "Subject to FCT"],
                ["B", "Not subject to FCT", "Not subject to FCT"],
                ["C", "Subject to FCT", "Not subject to FCT"],
                ["D", "Not subject to FCT", "Subject to FCT"]
            ]
        },
        options: ["A", "B", "C", "D"],
        correct: 1,
        explanation: ""
    },
    {
        id: 197,
        type: "standard",
        question: "51. NHT Co in Vietnam signs a contract to buy a production facility for an iron and steel factory from KOR Co in Korea. The total gross contract value is USD 100 million, including USD 80 million of machinery and equipment and USD 20 million for services of installation guide, supervision, warranty, and maintenance.\nWhich of the following statements is correct about VAT portion of FCT to be applied in the above case?",
        options: [
            "USD100 million is subject to VAT",
            "USD80 million is subject to VAT",
            "USD20 million is subject to VAT",
            "Total contract value is not subject to VAT"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 198,
        type: "standard",
        question: "52. MIC Co in Vietnam signs a contract to buy a production facility for a cement factory from REC Co in Korea. The total contract value (gross of CIT and net of VAT) is USD 100 million, including USD 80 million of machinery and equipment and USD 20 million for services of installation guide, supervision, warranty, and maintenance.\nWhich of the following statements is correct about CIT portion of FCT to be applied in the above case?",
        options: [
            "Only USD80 million is subject to CIT",
            "Only USD20 million is subject to CIT",
            "USD80 million and USD20 million are subject to CIT at separate CIT rates",
            "Total USD100 million is subject to one CIT rate"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 199,
        type: "standard",
        question: "53. SPEED, a China company, provides postal services from China to Vietnam (inbound) and from Vietnam to China (outbound).\nWhat are the applicable treatments of VAT portion of FCT on the above service by SPEED?",
        options: [
            "Both inbound and outbound revenue are subject to VAT",
            "Both inbound and outbound revenue are not subject to VAT",
            "Inbound revenue is subject to VAT, outbound revenue is not",
            "Outbound revenue is subject to VAT, inbound revenue is not"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 200,
        type: "standard",
        question: "54. RUS, a Hong Kong contractor, who does not follow the Vietnamese accounting system (VAS), signs a contract with MAY Co in Vietnam to provide machinery and equipment with installation and test run services for USD 20 million. The contract does not separate the value of machinery and equipment from the value of services.\nWhat is VAT liability of foreign contractor RUS?",
        options: [
            "Total contract value of USD 20 million is not subject to VAT",
            "Total contract value of USD 20 million is subject to VAT at 2%",
            "Total contract value of USD 20 million is subject to VAT at 3%",
            "Total contract value of USD 20 million is subject to VAT at 5%"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 201,
        type: "standard",
        question: "55. In the year 2025, SG Co, a company in Singapore, provided consulting services to CSM Co, a foreign invested company in Vietnam. With the deliverables of the services, CSM Co expected to significantly improve the efficiency of their operations in Vietnam and potentially their operations overseas in the future.\nThe contract value was USD800,000 (net of all taxes). SG Co performed 40% of the services in Singapore and 60% in Vietnam through its employees who travelled to Vietnam over a period of five months.\nSG Co has no permanent establishment in Vietnam.\nWhat is the amount of the corporate income tax portion of foreign contractor tax (rounded to the nearest USD) payable by CSM Co under the deemed method from the transaction in the year 2025?",
        options: [
            "USD26,593",
            "USD44,321",
            "USD42,105",
            "USD25,263"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 202,
        type: "standard",
        question: "56. In the year 2025, MNO Co, an Australian foreign contractor company, entered into a contract with PJ Co, a Vietnamese company, for the supply of specialised robots and training to code the operations of the robots. The value of the supplies are broken down as follows:\n• Robots: USD16 million (Delivered Duty Paid (DDP) (Incoterms) at PJ Co's premises).\n• Training: USD4 million (performed online).\nBoth amounts are inclusive of the corporate income tax portion and exclusive of the value added tax (VAT) portion of foreign contractor tax (FCT) in Vietnam.\nMNO Co applied the deemed method for FCT.\nWhat is the net amount (after the FCT liability in Vietnam, rounded to the nearest USD) that PJ Co should pay MNO Co for the supplies?",
        options: [
            "USD19,840,000",
            "USD19,640,000",
            "USD19,450,000",
            "USD19,800,000"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 203,
        type: "standard",
        question: "57. Express VN Co, a Vietnamese courier company, contracts with GlobalLogistics Co, a German company, for international express delivery services. In November 2025, Express VN Co paid GlobalLogistics Co USD150,000 for their services performed in November 2025. The payment was allocated as: USD60,000 for inbound services, and USD90,000 for outbound services. All of the amounts are net of foreign contractor tax.\nOn the assumption that the deemed method is applied, what is the amount of the corporate income tax portion of foreign contractor tax (FCT) which Express VN Co should withhold and pay on behalf of GlobalLogistics Co for November 2025 under the FCT regulations (rounded to the nearest USD)?",
        options: [
            "USD3,061",
            "USD1,224",
            "USD1,837",
            "USD0"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 204,
        type: "option_table",
        question: "58. In relation to the Double Tax Treaty exemption available in respect of the corporate income portion of foreign contractor tax by a foreign contractor, which ONE of the following options is correct?",
        optionTable: {
            headers: ["Option", "Due date for submission of the claim", "If a claim was submitted in the prior year"],
            rows: [
                ["1", "Within 15 days before the tax filing deadline", "Only new contracts signed in the year are required to be submitted"],
                ["2", "Within 15 working days before the tax filing deadline", "Only new contracts signed in the year are required to be submitted"],
                ["3", "Within 15 days before the tax filing deadline", "Both new and old contracts are required to be submitted"],
                ["4", "Within 15 working days before the tax filing deadline", "Both new and old contracts are required to be submitted"]
            ]
        },
        options: ["Option 4", "Option 1", "Option 2", "Option 3"],
        correct: 0,
        explanation: ""
    },
    {
        id: 205,
        type: "option_table",
        question: "Mr Quang, a 25-year-old Vietnamese citizen with no dependants, worked as a freelancer in Vietnam. He earned gross income of VND480 million from his job from January 2025 to May 2025.\nOn 1 July 2025, he moved to Singapore and started a new job there, while still keeping Vietnamese citizenship. He earned gross income of SGD6,000 per month from his job in Singapore. The exchange rate is SGD1 = VND18,500. He did not contribute mandatory social and health insurance in either country.\nWhat is Mr Quang's total personal income tax (PIT) liability (in VND million) in Vietnam, and the treatment of his tax paid in Singapore in the year 2025?",
        optionTable: {
            headers: ["Option", "PIT\nVND million", "Tax paid in Singapore for PIT in Vietnam"],
            rows: [
                ["1", "96", "Non-creditable as he is non-resident"],
                ["2", "237", "Creditable as he is a resident"],
                ["3", "229", "Non-creditable as he is non-resident"],
                ["4", "100", "Not applicable as he is not taxed in Vietnam for Singapore income"]
            ]
        },
        options: ["Option 3", "Option 4", "Option 2", "Option 1"],
        correct: 0,
        explanation: ""
    },
    {
        id: 206,
        type: "standard",
        question: "Ms Lan, a tax resident of Vietnam, sold the land-use-right for a piece of land which included a house, in Ho Chi Minh City, Vietnam, in July 2025 for VND18,000 million to her sister. The area of the land is 200m².\nMs Lan had inherited the land-use-right from her grandfather in 2019, and it was the only residential house (real estate) she owned. The value of the land-use-right in 2019 for inheritance tax purposes was VND5,000 million.\nThe People's Committee's price of land-use-right for that area is VND100 million/m².\nWhat is the personal income tax liability payable by Ms Lan in the year 2025 from the sale of the land-use-right to her sister?",
        options: [
            "VND360 million",
            "VND0",
            "VND400 million",
            "VND300 million"
        ],
        correct: 1,
        explanation: ""
    },
    {
        id: 207,
        type: "standard",
        question: "Ms Linh, a Vietnamese citizen, was awarded a car by her employer in recognition of her performance in the year 2025. The company purchased the car for an amount of VND1,870 million (inclusive of value added tax (VAT) at the rate of 10%) in December 2025, and it was registered under Ms Linh's name immediately upon delivery in December 2025.\nOn 31 December 2025, Ms Linh also received an award of 50,000 shares in the company, for her performance in the year 2025. The shares have a market value of VND15,000 per share as at the time of award.\nWhat is the amount of Ms Linh's taxable income for personal income tax purposes in relation to the performance bonuses received in the year 2025?",
        options: [
            "VND750 million",
            "VND1,700 million",
            "VND2,450 million",
            "VND1,870 million"
        ],
        correct: 1,
        explanation: ""
    },
    {
        id: 208,
        type: "standard",
        question: "In the year 2025, Mr Can, a 45-year-old Vietnamese citizen with two dependants, received a gross monthly salary of VND56 million from his employer. He also received a Tet bonus equal to one months salary plus a performance bonus of two months salary. He is responsible for his own social, health and unemployment insurance.\nMr Can also received two allowances in cash: a transportation allowance of VND3 million per month, and a uniform allowance of VND5 million in total from his employer during the year.\nWhat is Mr Can's annual personal income tax (PIT) liability from his employment income (in VND million, rounded to one decimal in the monthly PIT calculation ONLY) in the year 2025?",
        options: [
            "VND79.2 million",
            "VND92.4 million",
            "VND106.8 million",
            "VND105.6 million"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 209,
        type: "standard",
        question: "In the year 2025, Ms Khang, a 40-year-old Vietnamese citizen with three dependants, received a gross monthly salary of VND68 million from her employer, plus a performance bonus of three months' salary. She is responsible for her own social, health and unemployment insurance.\nMs Khang also received an accommodation allowance of VND50 million in cash from her employer during the year.\nWhat is Ms Khang's annual personal income tax (PIT) liability from her employment income (rounded to one decimal place in the monthly PIT calculation ONLY) in the year 2025?",
        options: [
            "VND130.8 million",
            "VND90.0 million",
            "VND193.2 million",
            "VND146.4 million"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 210,
        type: "standard",
        question: "Ms Ly Dion, a 32-year-old Belgium citizen, was assigned by her employer to work in Vietnam from 1 August 2025 until 31 December 2025 (i.e. five months), after which she returned to Belgium. Her two-year-old daughter accompanied her during this entire period.\nHer employer paid her a gross salary of USD30,000 per month, and as agreed with her, deducted USD1,000 per month from her salary to pay for her daughter's babysitting fees during their stay in Vietnam.\nShe was not subject to any mandatory contributions in Vietnam.\nWhat is the amount of personal deduction available for Ms Ly Dion in the year 2025?",
        options: [
            "VND77 million",
            "VND125 million",
            "VND202 million",
            "VND0"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 211,
        type: "standard",
        question: "Ms Hoa is an investor in LKC JSC (LKC), a company listed on the Vietnamese stock market. She purchased 100,000 shares of LKC when the share price was VND11,000 per share.\nIn the year 2025, the company announced a dividend in cash of VND1,000 per share. After receiving the dividend, Ms Hoa sold all her shares in LKC for VND30,000 per share.\nWhat is the personal income tax liability (in VND million and rounded to one decimal place) payable by Ms Hoa in the year 2025 from the transactions detailed?",
        options: [
            "VND3.0 million",
            "VND6.9 million",
            "VND3.1 million",
            "VND8.0 million"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 212,
        type: "standard",
        question: "On 1 August 2025, Ms Duy, a Vietnamese citizen, inherited 200,000 shares of NLT JSC, a non-listed joint stock company, from her aunt.\nMs Duy registered her ownership of the shares on 1 September 2025.\nHer aunt purchased the shares for VND15,000 per share in 2018. Based on the audited financial statements as at 30 June 2025, the book value per share was VND18,000.\nWhat is the amount of personal income tax liability (in VND million and rounded to one decimal place) that Ms Duy will pay in Vietnam following her inheritance?",
        options: [
            "VND3.6 million",
            "VND359.0 million",
            "VND59.0 million",
            "VND120.0 million"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 213,
        type: "standard",
        question: "In the year 2025, Ms Hanh, a 38-year-old Vietnamese citizen with two dependants, received a gross monthly salary of VND75 million from her employer, plus a Tet bonus of one month's salary. She is responsible for her own social, health and unemployment insurance.\nMs Hanh also received an innovation award of VND50 million in cash from her employer for winning a contest organised by the company.\nWhat is Ms Hanh's annual personal income tax (PIT) liability from her employment income (rounded to one decimal in the monthly PIT calculation ONLY) in the year 2025?",
        options: [
            "VND137.4 million",
            "VND166.0 million",
            "VND129.9 million",
            "VND148.3 million"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 214,
        type: "statements_list",
        question: "Ms Huyen Nguyen, a Vietnamese citizen, worked for MyTravel Co, a tourism company.\nOn 1 January 2025, she was awarded the following from her employer for excellent performance in the year 2024:",
        statements: [
            "(i) An overseas trip, valued at VND120 million. The deadline for redemption is June 2026. At the end of 2025, Ms Huyen Nguyen had not decided whether to go for the trip or not.",
            "(ii) A pre-paid membership card for services with a value of VND300 million, issued by ACC Co, a business partner of MyTravel Co. The card can be used to pay for services in all hotels operated by ACC Co at any time from 1 January 2025 to 31 December 2026. MyTravel Co purchased the card from ACC Co and the card is specific to the name of Ms Huyen Nguyen.",
            "What is the amount of taxable income, in VND million, for Ms Huyen Nguyen for personal income tax purposes in the year 2025 from these transactions?"
        ],
        options: [
            "VND150 million",
            "0",
            "VND300 million",
            "VND420 million"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 215,
        type: "standard",
        question: "In the year 2025, Ms Nhuy, a 48-year-old Vietnamese resident, inherited 2 million shares in Company V, a listed company on the Vietnam stock market, from her parents.\nAt the time of the inheritance, the nominal value and the market price per share was VND10,000 and VND8,000, respectively.\nMs Nhuy will be actively seeking to sell the shares in the year 2026 for cash.\nWhat is the amount of personal income tax liability (in VND million rounded to zero decimal places) payable by Ms Nhuy in the year 2025?",
        options: [
            "0",
            "VND1,600 million",
            "VND1,599 million",
            "VND1,999 million"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 216,
        type: "standard",
        question: "Mr Tom Alan, a New Zealand citizen and non-tax resident in Vietnam, is employed by X Co, a foreign company, to work in Vietnam for 120 days in the calendar year 2025.\nHis total employment income from X Co in the year 2025 is USD360,000. During his time in Vietnam, he also earned gross income of USD5,000 from winning a prize in a television show.\nWhat is the total personal income tax liability of Mr Alan (rounded to the nearest USD) in Vietnam in the year 2025?",
        options: [
            "USD24,133",
            "USD23,671",
            "USD24,586",
            "USD24,171"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 217,
        type: "standard",
        question: "In the year 2025, Mr Du, a 40-year-old Vietnamese citizen with three dependants, received a gross monthly salary of VND60 million from his employer, plus a bonus worth two months' salary. In December 2025, he also received a long-service award of VND100 million in cash for his ten year anniversary with the company.\nMr Du is responsible for his own social, health and unemployment insurance.\nWhat is Mr Du's annual personal income tax (PIT) liability from his employment income (rounded to two decimals in the monthly PIT calculation ONLY) in the year 2025?",
        options: [
            "VND108.66 million",
            "VND 87.06 million",
            "VND 158.58 million",
            "VND 128.59 million"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 218,
        type: "standard",
        question: "In the calendar year 2025, Mr Tony Stack, a non-resident individual working part time in Vietnam, earned a royalty of VND1,000 million from selling his software to a Vietnamese company.\nIn the month of July 2025, he purchased shares in Company A, a company listed on the Vietnamese stock exchange, for VND2,000 million and received a dividend of VND50 million.\nHe sold all the shares he owned in Company A in October 2025 at the same price as when he purchased them.\nWhat is the total amount of personal income tax in VND million (rounded to one decimal place) payable by Mr Tony Stack on the transactions detailed in the year 2025?",
        options: [
            "VND50.0 million",
            "VND54.0 million",
            "VND52.0 million",
            "VND49.5 million"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 219,
        type: "standard",
        question: "Ms Van, a Vietnamese resident and 30-year-old divorced, single mother of a daughter aged eight years, worked for Company T. She married her second husband on 1 April 2025. He has two sons aged ten years and seven years respectively. The couple agreed that Ms Van would claim deduction for all children from the date of marriage.On 1 November 2025, Ms Van decided to end her employment to take care of their three children, with her husband claiming deduction for all children from November onwards.\nWhat is the total amount of personal deductions in VND million (rounded to zero decimal places) that Ms Van would be entitled to for personal income tax purposes in the year 2025?",
        options: [
            "VND 216 million",
            "VND 246 million",
            "VND 242 million",
            "VND 238 million"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 220,
        type: "standard",
        question: "Mr Tieu, a Vietnamese resident, owns various parcels of real estate in various provinces.\nIn the year 2024, he purchased the land use right (LUR) for a parcel of land in Da Nang for VND10 million per square meter.\nIn the year 2025, he sold the LUR to another Vietnamese citizen for a contractual price of VND6,000 million, yielding a gain of VND3,500 million from his purchase price. The price for the same area of land as determined by the Da Nang People's Committee was VND40 million per square meter at the time of the sale.\nWhat is the total amount of personal income tax payable by Mr Tieu (in VND million) from the sale of the land use right in the year 2025?",
        options: [
            "VND120 million",
            "VND700 million",
            "VND150 million",
            "VND200 million"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 221,
        type: "standard",
        question: "Ms Huong Nguyen is a 30-year-old Vietnamese citizen with no dependants. During the year 2025, she received a gross monthly salary of VND40 million, plus the following: a bonus equal to two months' salary in January 2025 for her work performance in 2024; and a bonus equal to one month's salary in July 2025 for her half-year performance in 2025.\nIn the year 2025, her employer also paid her a clothing allowance of VND20 million in cash.\nMs Huong is responsible for her own social, health and unemployment insurance.\nWhat is Ms Huong's annual personal income tax (PIT) liability (rounded to two decimals in the monthly PIT calculation ONLY) in the year 2025?",
        options: [
            "VND73.61 million",
            "VND53.29 million",
            "VND69.15 million",
            "VND70.41 million"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 222,
        type: "option_table",
        question: "Mr Di, an Australian citizen, arrived in Vietnam for the first time on 22 May 2024 to take up employment with M Co.\nIn the calendar years 2024 and 2025, he spent the following periods in Vietnam:\nFrom 22 May 2024 to 31 December 2024 - 137 out of 224 days\nFrom 1 January 2025 to 21 May 2025 - 45 out of 141 days\nFrom 22 May 2025 to 30 November 2025 - 135 out of 192 days\nAt the date of termination of his employment (30 November 2025), he left Vietnam.\nWhat is Mr Di's residency status for personal income tax purposes for his first and second tax years in Vietnam?",
        optionTable: {
            headers: ["Option", "First tax year", "Second tax year"],
            rows: [
                ["1", "Resident", "Resident"],
                ["2", "Non-resident", "Non-resident"],
                ["3", "Resident", "Non-resident"],
                ["4", "Non-resident", "Resident"]
            ]
        },
        options: ["Option 1", "Option 2", "Option 3", "Option 4"],
        correct: 0,
        explanation: ""
    },
    {
        id: 223,
        type: "standard",
        question: "Ms Cindy, an Australian citizen with two registered dependants, arrived in Vietnam (with both dependants) for the first time on 15 July 2024, to commence work under an employment contract\nMs Cindy remained in Vietnam for the whole of the period from 15 July 2024 until 15 April 2025, when her employment contract came to an end, at which point, she (and her dependants) departed from Vietnam.\nWhat is the total amount of personal deductions (rounded to 0 decimal places) that Ms Cindy would be entitled to for personal income tax purposes throughout her period of employment in Vietnam?",
        options: [
            "VND 178 million",
            "VND 110 million",
            "VND 198 million",
            "VND 238 million"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 224,
        type: "standard",
        question: "On 1 April 2025, Mr Alib, a non-tax resident individual in Vietnam, purchased 200,000 shares of a company listed on the Vietnamese stock market for VND50,000 per share.\nOn 1 December 2025, he sold 60% of the shares for VND30,000 per share (making a loss of VND20,000 per share).\nOn 31 December 2025, he received a dividend of VND8,000 per share on the remaining 80,000 shares held.\nIn respect of the transactions described, what is the total amount of personal income tax payable by Mr Alib (in VND million, rounded to one decimal) in the year 2025?",
        options: [
            "VND35.6 million",
            "VND32 million",
            "VND3.6 million",
            "VND0"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 225,
        type: "standard",
        question: "Ms Trang is a Vietnamese citizen who earned gross employment income of VND40 million per month. She gave birth to her first child and registered them as a dependent in January 2025.\nShe subsequently took six months maternity leave from January to June 2025.\nDuring the maternity period, her employer paid 80% of her monthly salary to her, in addition to the official maternity payment she received from the Social Insurance Fund.\nWhat is Ms Trang's annual personal income tax (PIT) liability (rounded to one decimal in the monthly PIT calculation ONLY) in the year 2025?",
        options: [
            "VND23.7 million",
            "VND14.4 million",
            "VND0",
            "VND19.23 million"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 226,
        type: "option_table",
        question: "Mr. Henry is an Australian citizen who both works and is a tax resident in Vietnam. He has three children, twins aged 4 and a daughter aged 12.\nIn the year 2025, his employer agreed to pay an amount equivalent to USD1,500 per month for each of Henry's children for international school and kindergarten fees. The fees were paid directly to the providers. Henry had to bear and pay an additional amount of USD500 per month for his daughter's school fees.\nWhat are the total amounts of taxable and non-taxable income for personal income tax purposes for Mr. Henry in the year 2025 with respect to the school fees?",
        optionTable: {
            headers: ["Option", "Taxable income\n(USD)", "Non-taxable income\n(USD)"],
            rows: [
                ["1", "48,000", "0"],
                ["2", "36,000", "18,000"],
                ["3", "0", "54,000"],
                ["4", "54,000", "0"]
            ]
        },
        options: ["Option 1", "Option 2", "Option 3", "Option 4"],
        correct: 0,
        explanation: ""
    },
    {
        id: 227,
        type: "standard",
        question: "Mr Thanh is a 45-year-old Vietnamese tax resident. In January 2025, he inherited a piece of land from his parent with a registered value of VND2,000 million.\nIn March 2025, he sold the land for VND5,000 million and used the proceeds to buy a luxury apartment for the same amount.\nIn December 2025, he sold the apartment for VND4,000 million, resulting in a loss of VND1,000 million from the sale.\nWhat is the total amount of personal income tax payable by Mr Thanh from the above transactions in the year 2025?",
        options: [
            "VND599 million",
            "VND180 million",
            "VND379 million",
            "VND100 million"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 228,
        type: "standard",
        question: "Mr Lam is a Vietnamese citizen with three registered dependants. In the year 2025, Mr Lam received a gross monthly salary from employment of VND150 million plus one monthly salary for Tet bonus and an annual uniform allowance in cash of VND11 million. He is responsible for his own social, health and unemployment insurance.\nWhat is Mr Lam's annual personal income tax (PIT) liability (in VND millions rounded to two decimals in the monthly PIT calculation ONLY) in the year 2025?",
        options: [
            "VND 399.12 million",
            "VND 444.12 million",
            "VND 507.06 million",
            "VND 451.62 million"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 229,
        type: "standard",
        question: "Ms Ann is a non-resident of Vietnam. On 31 March 2025, she purchased 200,000 shares of VRC JSC, a company listed on the Vietnamese stock market, for VND180,000 per share. On 15 July 2025, she sold a quarter of these shares for VND200,000 per share. On 30 November 2025, she received a cash dividend of VND10,000 per share on the remaining shares still held.\nWhat is the total amount of personal income tax in VND million payable by Ms Ann on the above transactions in the year 2025?",
        options: [
            "VND 275 million",
            "VND 85 million",
            "VND 10 million",
            "VND 200 million"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 230,
        type: "standard",
        question: "Mr Truong is a Vietnamese citizen with no dependants. In December 2025, he completed a distance learning master's course with a university in Belgium. In the year 2025, Mr Truong had the following income:\n- A scholarship equivalent to VND470 million from the university (as above), according to its policy, with sufficient entitlement documents;\n- VND580 million interest from term deposits in Vietcombank, a commercial bank established in Vietnam; and\n- VND3,500 million, being the market value of an apartment that he inherited from his parent.\nWhat is the amount of personal income tax (in VND million) payable by Mr Truong on the above sources of income in the year 2025?",
        options: [
            "VND 29 million",
            "VND 99 million",
            "VND 70 million",
            "VND 0"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 231,
        type: "standard",
        question: "Mr Quang is 40 years old and is a Vietnamese citizen. He is a single father of two children, aged 11 and 8. He married his second wife, Marie, a US citizen and a single mother of a 10-year-old boy, on 1 April 2025. They agreed from the date of marriage that Mr Quang can claim all regulatory reliefs/deductions available with respect to all their children. The whole family migrated to the US on 15 September 2025 when Mr Quang ceased his Vietnamese citizenship.\nWhat is the total amount of personal and dependant deductions (in VND million, rounded to 2 decimals) which Mr Quang can claim for Vietnam personal income tax purposes in the year 2025?",
        options: [
            "VND 192.50 million",
            "VND 204.60 million",
            "VND 178.20 million",
            "VND 290.40 million"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 232,
        type: "standard",
        question: "Ms Oanh is a Vietnamese citizen with two registered dependents. In 2025, her gross monthly salary from employment was VND 180 million, plus one month's salary performance bonus.\nShe is responsible for her own social, health and unemployment insurance.\nWhat is Ms Oanh's annual personal income tax (PIT) liability (in VND millions, rounded to two decimals only in the monthly PIT calculation) in the year 2025?",
        options: [
            "VND604.44 million",
            "VND541.44 million",
            "VND597.00 million",
            "VND578.40 million"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 233,
        type: "standard",
        question: "Mr Vincent, a Singaporean citizen, entered into a short-term employment contract with KTC Co, a Vietnamese company. He arrived in Vietnam on 1 July 2025 and departed on 15 October 2025, after completing the work. During this period, he received a net monthly salary of USD25,000, for the number of months he was working in Vietnam. He also received an ad-hoc net bonus of USD10,500 for his work in Vietnam, paid by KTC Co on 31 October 2025 when he was in Singapore.\nWhat is the amount of personal income tax (rounded to the nearest VND million) which KTC Co is required to declare in respect of the income paid to Mr Vincent in 2025 under the above contract?",
        options: [
            "VND461 million",
            "VND514 million",
            "VND649 million",
            "VND411 million"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 234,
        type: "standard",
        question: "Mr Liem is a Vietnamese citizen who owns various parcels of real estate. In July 2025, he sold the land use right of 5,000 square metres of land in Hoa Binh Province to another Vietnamese individual. The total contractual selling price was VND12,000 million. He bought the land use right in July 2020 at the price announced by the Provincial People's Committee (PC) of VND1 million per square metre. At the time of sale, the price announced by the PC was VND2 million per square metre.\nWhat is the personal income tax payable by Mr Liem on the sale of the land in the year 2025?",
        options: [
            "VND200 million",
            "VND240 million",
            "VND140 million",
            "VND100 million"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 235,
        type: "standard",
        question: "In 2025, Ms Hoai, a Vietnamese citizen, earned a monthly gross salary of VND20 million from her employment. She is responsible for her own insurance contributions. She has a daughter, registered as her dependant, who turned 18 years old on 20 April 2025 and started working on the same date. She also registered her father, who is 70 years old with no income, as her dependant from 10 June 2025, when she started taking care of him.\nWhat is the amount of Ms Hoai's monthly assessable income (in VND million, rounded to 2 decimals, after all relevant deductions and reliefs) for personal income tax purposes in the year 2025?",
        options: [
            "VND65.2 million",
            "VND22.05 million",
            "VND34.40 million",
            "VND0"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 236,
        type: "standard",
        question: "In 2025, Mr Quang, a Vietnamese citizen with no dependants, had the following income:\n• A compensation of VND2,000 million from the State, for resettlement from his residence upon land expropriation by the State for a national project;\n• A scholarship valued at USD25,000 from a university in the US for a remote learning course (supported by sufficient entitlement documents).\nWhat is Mr Quang's personal income tax liability (rounded to the nearest VND million) in the year 2025 from the above income sources?",
        options: [
            "VND 40 million",
            "VND 0 million",
            "VND 58 million",
            "VND 98 million"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 237,
        type: "standard",
        question: "Ms Thanh is a Vietnamese citizen with three registered dependants. Her total 2025 gross salary from employment, received in twelve equal instalments, was VND720 million, plus two monthly salary performance bonuses, each equal to her monthly salary amount. She pays for her own social, health and unemployment insurance.\nWhat is Ms Thanh's annual personal income tax (PIT) liability (in VND millions, rounded to two decimals only in the monthly PIT calculations) in the year 2025?",
        options: [
            "VND89.04 million",
            "VND83.66 million",
            "VND72.84 million",
            "VND142.20 million"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 238,
        type: "standard",
        question: "On 1 January 2025, Mr Cuong, a Vietnamese citizen, held a portfolio of 1 million shares of DCB Co, a company listed on the Vietnamese stock exchange. On 5 January 2025, he received 300,000 free shares from DCB Co, as a dividend for 2019 (recorded in DCB Co's records based on the nominal value of VND10,000 per share). On 28 April 2025, he sold 200,000 shares for VND20,000 each.\nWhat is the amount of personal income tax payable by Mr Cuong in 2025 from the transactions in relation to DCB Co shares?",
        options: [
            "VND2 million",
            "VND104 million",
            "VND4 million",
            "VND154 million"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 239,
        type: "standard",
        question: "Ms Thuy is a Vietnamese citizen working for BABAU Co earning a contractual salary of VND 50 million per month. In 2025, she gave birth to her first son in mid-March (being her only registered dependent in 2025). During her maternity leave from March to August, her salary was paid from social insurance funds. BABAU Co also paid her two months' salary in July and August as she volunteered to work at home throughout those two months.\nWhat is the amount (rounded to the nearest VND million) of Ms Thuy's taxable income after personal and dependent deductions, and before insurance deduction, for personal income tax calculation purposes in 2025?",
        options: [
            "VND224 million",
            "VND415 million",
            "VND424 million",
            "VND290 million"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 240,
        type: "standard",
        question: "Ms Tran is a Vietnamese tax resident with two registered dependants. In 2025, she received a gross monthly salary of VND45 million plus a performance bonus of one month's salary, and a clothing allowance of VND12 million in cash. Tran pays for her own social, health and unemployment insurance.\nWhat is Tran's annual personal income tax (PIT) liability (in VND millions, rounded to two decimals only in the monthly PIT calculations) in the year 2025?",
        options: [
            "VND51.08 million",
            "VND66.61 million",
            "VND39.74 million",
            "VND43.57 million"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 241,
        type: "standard",
        question: "In 2025, Jonny, a UK resident, entered into an agreement with THB Co, a publisher in Vietnam. Under the agreement, Jonny grants THB Co the right to publish, in Vietnam, his new book about coaching skills for an amount of USD150,000. Jonny's personal income tax (PIT) liability in Vietnam is to be borne by THB Co.\nWhat amount of PIT liability (in VND millions, rounded to two decimals), in respect of Jonny, will THB Co be required to pay in Vietnam under the above agreement?",
        options: [
            "VND185.53 million",
            "VND175.75 million",
            "VND176.25 million",
            "VND208.68 million"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 242,
        type: "standard",
        question: "Fin, a non-tax resident in Vietnam, held shares in FTP Co, a company listed on the Ho Chi Minh City Stock Exchange. In 2025, he received dividends worth VND3,000 million from FTP Co. 70% of the dividends were received in cash and the remaining were in the form of FTP Co shares which he sold immediately for VND5,000 million. He had no other share transactions during 2025.\nWhat is Fin's personal income tax liability in respect of his FTP Co shares during 2025?",
        options: [
            "VND155 million",
            "VND110 million",
            "VND105 million",
            "VND150 million"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 243,
        type: "standard",
        question: "Ring, an Australian citizen, works for YEU Co in Vietnam. He received a monthly gross salary of USD22,000. YEU Co also provided him with accommodation, subject to a cap of USD3,000 per month. Ring decided to stay in a villa for a monthly rent of USD3,500 which YEU Co paid for and charged him USD500 per month.\nWhat is Ring's monthly taxable accommodation allowance (in VND millions, rounded to two decimals) for personal income tax purposes in 2025?",
        options: [
            "VND77.55 million",
            "VND79.50 million",
            "VND82.25 million",
            "VND65.80 million"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 244,
        type: "standard",
        question: "Ms Hien Nguyen, a Vietnamese tax resident, is 40 years old and has four dependants. For the whole of 2025, her monthly gross salary was VND80 million. Ms Nguyen was responsible for her own social, health and unemployment insurance contributions. On 31 December 2025 her employer announced that it would pay each employee a Tet bonus equal to two-months' salary in January 2026.\nWhat is Ms Hien Nguyen's annual personal income tax (PIT) liability (in VND millions, rounded to two decimals only in the monthly PIT calculations) in the year 2025?",
        options: [
            "VND170.28 million",
            "VND122.28 million",
            "VND100.46 million",
            "VND162.36 million"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 245,
        type: "standard",
        question: "Ms Hen Thi is a Vietnamese individual investor in real estate. In 2025, she sold the land use right for a 500 square metre piece of land in Hanoi to another Vietnamese individual. The contractual price for the sale was VND20 billion, representing a gain of VND6 billion over the original price paid by Ms Thi when she purchased the land. The price per square metre as determined by the People's Committee for the same area of land at the time of sale was VND60 million.\nWhat is the amount of personal income tax (PIT) payable (in VND millions) by Ms Hen Thi on the sale of the land use right in 2025?",
        options: [
            "VND120 million",
            "VND1,200 million",
            "VND600 million",
            "VND320 million"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 246,
        type: "option_table",
        question: "Mr Alaf, an Oman citizen, arrived in Vietnam to work for VFF Co from 15 April 2024. He completed his employment on 15 November 2025 and left Vietnam. Throughout the period from 15 April 2024 to 15 November 2025 he spent the following number of days in Vietnam:\n- From 15 April 2024 to 31 December 2024 – 126 days\n- From 1 January 2025 to 14 April 2025 – 57 days\n- From 15 April 2025 to 15 November 2025 – 180 days\nWhat is Mr Alaf's tax residency status for both his first and second tax years in Vietnam, based on the above information?",
        optionTable: {
            headers: ["Option", "First tax year", "Second tax year"],
            rows: [
                ["Option 1", "Resident", "Non-resident"],
                ["Option 2", "Non-resident", "Resident"],
                ["Option 3", "Non-resident", "Non-resident"],
                ["Option 4", "Resident", "Resident"]
            ]
        },
        options: ["Option 1", "Option 2", "Option 3", "Option 4"],
        correct: 0,
        explanation: ""
    },
    {
        id: 247,
        type: "standard",
        question: "Ms Thuy Pham, a Vietnamese citizen, works for LTD Co. She gave birth to twins, who were immediately registered as her dependants, in early March 2025. She took maternity leave from March 2025 to October 2025.\nWhat is Ms Thuy Pham's total self and dependant deduction amount (in VND millions, rounded to one decimal) for personal income tax (PIT) liability purposes in 2025?",
        options: [
            "VND104.4 million",
            "VND198.0 million",
            "VND220.0 million",
            "VND194.4 million"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 248,
        type: "standard",
        question: "Mr. Hung Duong, a Vietnamese tax resident, is 45 years old and has three dependents. He is the director of HLB Co, a company incorporated in Vietnam. In 2025, he earned a gross monthly salary of VND 300 million plus an annual bonus equal to four months' salary. Hung is responsible for his own social, health, and unemployment insurance.\nWhat is Mr. Hung Duong's monthly personal income tax liability (rounded to the nearest VND million only in the final PIT calculations) in the fiscal year 2025?",
        options: [
            "VND 120 million",
            "VND 87 million",
            "VND 121 million",
            "VND 92 million"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 249,
        type: "standard",
        question: "In 2025, Ms. May Tran and Mr. Man Nguyen won a car as a promotional prize in a campaign held by LUXCAR, a car dealer in Vietnam. The car has a market value of VND 1,870 million (inclusive of value-added tax (VAT)). May and Man agreed to share equally the personal income tax to be withheld by LUXCAR, and that Man would pay 50% of the market value of the car (after deducting 10% VAT) to May, so that Man would be the sole owner of the car.\nWhat is the amount of personal income tax (PIT) liability (rounded to the nearest VND million) that Ms. May Tran is subject to on her share of the promotional prize won in the fiscal year 2025?",
        options: [
            "VND 93 million",
            "VND 0 million",
            "VND 85 million",
            "VND 169 million"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 250,
        type: "standard",
        question: "Ms. Mai Nguyen is a real estate trader and owns various plots of land. In 2011, she bought the land use right for a 1,500 square meter plot of land in Da Nang for VND 3 million per square meter. There was no construction project on the land. In 2025, she sold the land use right under a contract that denominated the proceeds at VND 4 million per square meter. The price of the same area of land set by The People's Committee was VND 2.5 million per square meter in 2010, and VND 10 million per square meter in 2025.\nWhat is the personal income tax (PIT) liability of Ms. Mai Nguyen from the sale of the land use right in the fiscal year 2025?",
        options: [
            "VND 300 million",
            "VND 120 million",
            "VND 30 million",
            "VND 225 million"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 251,
        type: "standard",
        question: "Ms. Hoa Lam, who is 40 years old, is a Vietnamese citizen. During 2025, she worked for EXPL Co, a company incorporated in Vietnam. Her hourly equivalent gross salary was VND 0.5 million. During the year she had recorded overtime of 200 hours. Half of her overtime hours were paid at 150% of her hourly equivalent gross salary and the remaining hours were paid at 200% of her hourly equivalent gross salary.\nWhat is Ms. Hoa Lam's non-taxable overtime income for Vietnamese personal income tax (PIT) purposes (in VND million) in the fiscal year 2025?",
        options: [
            "VND 175 million",
            "VND 75 million",
            "VND 100 million",
            "VND 0 million"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 252,
        type: "standard",
        question: "Mr Quang Phan, a 35-year-old Vietnamese tax resident, works for Hash Vina, a foreign invested company in Vietnam. He was relocated back to Vietnam on 1 January 2025 after a three-year secondment to Hash Australia, a sister company of Hash Vina. In 2025, Mr Quang received VND200 million monthly gross salary plus a performance bonus equivalent to VND360 million for his work in Australia. During 2025 Hash Vina also paid for two return airfare tickets costing VND46 million in total for Mr Quang to visit his 35-year-old wife and 16-year-old son who live in Australia.\nWhat is Mr Quang Phan's annual personal income tax (PIT) liability (in VND millions – to be rounded only in the final PIT calculations) in the year 2025?",
        options: [
            "VND799 million",
            "VND673 million",
            "VND803 million",
            "VND779 million"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 253,
        type: "standard",
        question: "In February 2025, Mr May and Ms Man, two Vietnamese tax residents, were the equal co-winners of a promotion prize, a car which had a market value of VND990 million, inclusive of 10% VAT, from a real estate company.\nWhat is the amount (in VND million, rounded by one decimal) of Ms Man's personal income tax (PIT) liability on the above promotion prize?",
        options: [
            "VND48.5 million",
            "VND44.5 million",
            "VND49.0 million",
            "VND44.0 million"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 254,
        type: "standard",
        question: "Mr Jung Nam-Oh is a Korean citizen employed by EPR KR, a company in Korea. From March 2025 to June 2025, Jung was assigned to work in Vietnam on a short-term project for EPR VN Co, a subsidiary of EPR KR. During that time Jung was present in Vietnam for 98 days. EPR Group cannot separate his income attributable to the project in Vietnam from his total employment income from EPR KR. In 2025, Jung's annual gross employment income from EPR KR was USD400,000 and EPR VN Co also paid for a golf course membership at a cost of VND100 million for his use whilst in Vietnam. In 2025, Mr Jung Nam-Oh had two dependants in Korea.\nWhat is the total personal income tax (PIT) liability (rounded to VND millions) in Vietnam for Mr Jung Nam-Oh in the year 2025?",
        options: [
            "VND1,880 million",
            "VND589 million",
            "VND519 million",
            "VND1,900 million"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 255,
        type: "standard",
        question: "In 2024, Ms Mai Pham, a Vietnamese citizen, purchased 100,000 shares in TBC Bank in 2024 when the price per share was VND30,000 (three times par value). The shares were listed on the official stock exchange and in 2025, TBC Bank announced a 20% dividend per share, of which half would be paid in cash and half in the form of bonus shares. The market price of the shares at the time of announcement was VND50,000 per share. Ms Mai Pham had no intention of selling these shares in 2025.\nWhat is Ms Mai Pham's Vietnamese personal income tax (PIT) liability (in VND million) in the year 2025 in relation to the dividend?",
        options: [
            "VND5 million",
            "VND15 million",
            "VND25 million",
            "VND0 million"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 256,
        type: "standard",
        question: "On 1 September 2024, Mr Mohammad Taqi, a Singaporean citizen, commenced a secondment in the Vietnamese representative office of AFC Co, a company headquartered in Singapore. He received gross employment income of USD10,000 per month from AFC Co relating to his secondment. He resided in Vietnam from 1 September 2024 until his employment was terminated on 15 February 2025 by AFC Co, and he left Vietnam on the same date. He has no dependants.\nWhat is the amount (in VND million, rounded to one decimal) of Mr Mohammad Taqi's personal income tax (PIT) liability for the first tax year in Vietnam in respect of his secondment?",
        options: [
            "VND182.4 million",
            "VND291.5 million",
            "VND367.4 million",
            "VND240.9 million"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 257,
        type: "standard",
        question: "In January 2025, Mr Chris Beath, a 50-year-old Australian citizen, started his employment in Vietnam for VF Co, a Vietnamese company. In March 2025, his wife Allanda, also a 50-year-old Australian citizen, suffered an accident in Australia. She was not handicapped, but had to move to Vietnam to live with Chris from April 2025 to the end of the 2025 year. She had no income in 2025. VF Co provided Chris with cash support of VND120 million towards medical care expenses for Allanda in Vietnam during 2025.\nWhat is the total personal deduction/relief (in VND millions and ignoring social, health and unemployment insurance) Mr Chris Beath can claim in the year 2025 relating to his personal income tax (PIT)?",
        options: [
            "VND252 million",
            "VND172 million",
            "VND292 million",
            "VND132 million"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 258,
        type: "option_table",
        question: "Mr Tomaz is a Hong Kong citizen and tax resident. He arrived in Vietnam to work on 21 April 2024 and on completion of his employment contract, he left Vietnam on 31 October 2025. In the years 2024 and 2025, he spent the following numbers of days in Vietnam:\n- From 21 April to 31 December 2024 – 130 days\n- From 1 January to 20 April 2025 – 64 days\n- From 21 April to 31 October 2025 – 110 days\nBased solely on the above information, what is Mr Tomaz's tax residency status in his first and second tax year in Vietnam?",
        optionTable: {
            headers: ["Option", "First year", "Second year"],
            rows: [
                ["A", "Resident", "Resident"],
                ["B", "Resident", "Non-resident"],
                ["C", "Non-resident", "Resident"],
                ["D", "Non-resident", "Non-resident"]
            ]
        },
        options: ["A", "B", "C", "D"],
        correct: 0,
        explanation: ""
    },
    {
        id: 259,
        type: "standard",
        question: "Ms Hoai Pham has two dependants. In 2025, her monthly gross salary was VND50 million and she was responsible for paying compulsory insurance.\nWhat is Ms Hoai Pham's monthly tax liability (to the nearest VND10,000)?",
        options: [
            "VND4.16 million",
            "VND4.67 million",
            "VND6.26 million",
            "VND3.41 million"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 260,
        type: "standard",
        question: "Mr Gambl is a Canadian and non-resident in Vietnam. On 1 December 2025, during his vacation trip to Vietnam, he visited PHT, a casino for expatriates in Vietnam. He cashed in (i.e. exchanged cash for chips) USD600 at the beginning, and cashed out (i.e. exchanged chips for cash) USD500 on each of three separate occasions with his winnings.\nWhat is Mr Gambl's tax liability in Vietnam as a result of these transactions?",
        options: [
            "VND1,385,000",
            "VND525,000",
            "VND2,525,000",
            "VND3,225,000"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 261,
        type: "standard",
        question: "Mr. Minh Tu, a Vietnamese citizen, was assigned to work in the Singapore representative office of VNP Co, a company headquartered in Vietnam. In 2025, he received a monthly gross income of USD 20,000, plus an annual tuition fee of USD 40,000 for his ten-year-old son, for studying at a school in Singapore. The tuition fee was paid directly by the representative office of VNP Co to the school.\nWhat is the amount (in VND million, rounded to two decimals) of Mr. Minh Tu's Vietnamese monthly personal income tax (PIT) liability in the year 2025 (before deducting any foreign tax credit)?\nYou should assume Mr. Nhat Minh is not subject to any compulsory insurance in Vietnam.",
        options: [
            "VND 184.10 million",
            "VND 154.65 million",
            "VND 150.80 million",
            "VND 170.26 million"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 262,
        type: "standard",
        question: "Ms. Quyen is a financial expert, she is paid a salary of VND 13 million/month by company A. In addition, Ms. Quyen also receives a cloth allowance of VND 6 million/year by cash, a meal allowance of VND 880,000. Company A arranges transportation for a group of 10 staff (including Ms. Quyen) to travel from home to work and vice versa, which costs VND 20 million/month. Ms. Quyen has no dependents.\nWhat is the average monthly taxable income of Ms. Quyen (ignoring the compulsory insurance)?",
        options: [
            "VND 13.10 million",
            "VND 12.10 million",
            "VND 12.23 million",
            "VND 13.23 million"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 263,
        type: "standard",
        question: "Ms. Mai Trang, a 40-year-old Vietnamese citizen, registered her two children as dependants in 2025. Throughout that year her first son, Phu, was 20 years old and studied at the university in the United States and he had no income. Her daughter, Hai, became 18 years old on 1 October 2025 and was studying at the university in Vietnam. Hai is a teen actress and earned an income of VND 100 million from movie casting in November 2025.\nWhat is the total dependant relief (in VND million, rounded to one decimal) available to Ms. Mai Trang in 2025?",
        options: [
            "VND 92.4 million",
            "VND 52.8 million",
            "VND 39.6 million",
            "VND 105.6 million"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 264,
        type: "standard",
        question: "Mr. Oliver Gabriel is a 30-year-old UK citizen assigned to work for ATF Co, a foreign-invested company in Vietnam. In 2025, Oliver spent more than 183 days in Vietnam, and received gross income consisting of a monthly salary of USD 35,000, housing allowance of USD 5,500 per month in cash, and a performance incentive of USD 35,000. He was not subject to any mandatory insurance.\nWhat is Mr. Oliver Gabriel's monthly Vietnamese personal income tax (PIT) liability (in VND million rounded to one decimal only at the final PIT calculation) in the year 2025?",
        options: [
            "VND 309.2 million",
            "VND 319 million",
            "VND 389 million",
            "VND 347 million"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 265,
        type: "statements_list",
        question: "Which of the following items of income would NOT be subject to personal income tax in Vietnam?",
        statements: [
            "1) Medical support for fatal disease from the employer to the parent-in-law of an employee",
            "2) One-time round-trip home leave air fares for the family of an expatriate employee",
            "3) Kindergarten tuition fees for the children of a Vietnamese employee working abroad",
            "4) Voucher issued by the employer to an employee for lunches in the canteen operated by the employer"
        ],
        options: [
            "(1), (2) and (3)",
            "(2), (3) and (4)",
            "(1), (2) and (4)",
            "(1), (3) and (4)"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 266,
        type: "standard",
        question: "In 2025, Driver X was awarded “The Gold Driver” by the Ministry of Transport with a bonus of VND 50 million.\nWhat is the personal income tax (PIT) liability of Driver X from the bonus?",
        options: [
            "VND 2.5 million",
            "VND 5 million",
            "VND 7.7 million",
            "VND 0"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 267,
        type: "statements_list",
        question: "Mr. Theodore is a foreigner dispatched by Coastal Oil Co to an oil rig on the continental shelf of Vietnam.\nAccording to the labor contract, the work cycle of Mr. Theodore on this oil rig is 28 consecutive working days and following 28 days off. Coastal Oil Co pays the following for Mr. Theodore:",
        statements: [
            "(i) air tickets for Mr. Theodore to fly from his country to Vietnam and vice versa for every time of changing shift",
            "(ii) the helicopter that takes Mr. Theodore from the mainland to the oil rig and vice versa",
            "(iii) the residence expense while Mr. Theodore is waiting for the helicopter"
        ],
        options: [
            "(i) and (ii) only",
            "(ii) and (iii) only",
            "(i), (ii), and (iii)",
            "None"
        ],
        correct: 3,
        explanation: ""
    },
    {
        id: 268,
        type: "standard",
        question: "Ms. Nam Phuong, who has incomes from wages and remunerations of MNY Co, also has dividend income paid by NPM Co.\nWhich of the following statements describes correctly about authorizing a tax statement?",
        options: [
            "Ms. Phuong can authorize MNY Co to finalize tax on her behalf",
            "Ms. Phuong can authorize NPM Co to finalize tax on her behalf",
            "Ms. Phuong must finalize tax by herself",
            "Ms. Phuong can select MNY Co or NPM Co for finalizing tax on her behalf"
        ],
        correct: 0,
        explanation: ""
    },
    {
        id: 269,
        type: "standard",
        question: "A child of Mr. Hai born on 20 June 2025.\nWhen is this child considered a dependent of Mr. Hai for PIT purpose?",
        options: [
            "From January 2026",
            "From July 2025",
            "From June 2025",
            "From January 2025"
        ],
        correct: 0,
        explanation: ""
    }
];
