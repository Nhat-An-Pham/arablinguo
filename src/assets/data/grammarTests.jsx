const grammartests = [
    {
        categoryName: "Beginner",
        testCount: "10",
        img: require("../background/beginnerlevel.png"),
        tests: [
            {   
                testId: "bt1",
                testName: "Beginner Test 1",
                questions: [{
                    questionId: "cate_01_01",
                    question: "In which country, Chinese is most spoken?",
                    correct: "China",
                    answers: ["Britain", "America", "Russia", "China"],
                }, {
                    questionId: "cate_01_02",
                    question: "This is the second question of cate beginner?",
                    correct: "Yes",
                    answers: ["No", "Yes"],
                }]
            }, {
                testId: "bt2",
                testName: "Beginner Test 2",
                questions: [{
                    questionId: "cate_01_01",
                    question: "In which country, Chinese is most spoken?",
                    correct: "China",
                    answers: ["Britain", "America", "Russia", "China"],
                }, {
                    questionId: "cate_01_02",
                    question: "This is the second question of cate beginner?",
                    correct: "Yes",
                    answers: ["No", "Yes"],
                }]
            }],
    },
    {
        categoryName: "Intermediate",
        testCount: "2",
        img: require("../background/intermediatelevel.png"),
        tests: [
            {
                testId: "it1",
                testName: "Intermediate Test 1",
                questions: [{
                    questionId: "cate_01_01",
                    question: "In which country, Chinese is most spoken?",
                    correct: "China",
                    answers: ["Britain", "America", "Russia", "China"],
                }, {
                    questionId: "cate_01_02",
                    question: "This is the second question of cate beginner?",
                    correct: "Yes",
                    answers: ["No", "Yes"],
                }]
            }, {
                testId: "it2",
                testName: "Intermediate Test 2",
                questions: [{
                    questionId: "cate_01_01",
                    question: "In which country, Chinese is most spoken?",
                    correct: "China",
                    answers: ["Britain", "America", "Russia", "China"],
                }, {
                    questionId: "cate_01_02",
                    question: "This is the second question of cate beginner?",
                    correct: "Yes",
                    answers: ["No", "Yes"],
                }]
            }],
    },
    {
        categoryName: "Advanced",
        testCount: "3",
        img: require("../background/advancedlevel.png"),
        tests: [
            {
                testId: "at1",
                testName: "Advanced Test 1",
                questions: [{
                    questionId: "cate_01_01",
                    question: "In which country, Chinese is most spoken?",
                    correct: "China",
                    answers: ["Britain", "America", "Russia", "China"],
                }, {
                    questionId: "cate_01_02",
                    question: "This is the second question of cate beginner?",
                    correct: "Yes",
                    answers: ["No", "Yes"],
                }]
            }, {
                testId: "at2",
                testName: "Advanced Test 2",
                questions: [{
                    questionId: "cate_01_01",
                    question: "In which country, Chinese is most spoken?",
                    correct: "China",
                    answers: ["Britain", "America", "Russia", "China"],
                }, {
                    questionId: "cate_01_02",
                    question: "This is the second question of cate beginner?",
                    correct: "Yes",
                    answers: ["No", "Yes"],
                }]
            }],
    }
];

export default grammartests;