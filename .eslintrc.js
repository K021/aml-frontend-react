module.exports = {
    "env": {
        "es6": true,
        "node": true,
        "browser": true,
    },
    "extends": "eslint:recommended",
    "plugins": [
        "react",
    ],
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true,
            "modules": true,
        }
    },
    "rules": {
        indent: [
            "error",
            2,
            // 아래 내용 https://eslint.org/docs/rules/indent 참조
            {
                "SwitchCase": 1,
                "ignoredNodes": [
                    // 3항 조건 연산자 안에 있는 객체 선언문 무시
                    // "ConditionalExpression > ObjectExpression",
                    "ConditionalExpression > *",  // 3항 조건 연산자 안에 있는 모든 인덴트 무시
                ]
            }
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "warn",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
        "no-console": "off",  // 개발 중 콘솔 출력을 에러로 평가하는 것 off
        "no-unused-vars": "off",
    }
};
