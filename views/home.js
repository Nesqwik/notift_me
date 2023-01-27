'use strict'

module.exports = (data, counter) => {
    return {
        "type": "flex",
        "direction": "vertical",
        "spacing": 16,
        "mainAxisAlignment": "spaceEvenly",
        "crossAxisAlignment": "center",
        "children": [
            {
                "type": "button",
                "text": "Notify Me !",
                "onPressed": {
                    "action": "notify",
                    "props": {
                        "user": ["@me"]
                    }
                }
            },
        ]
    }
}

