import { serverUrl } from "../lib/config";


interface FormInput {
    issue_id: string,
    content: string,
    user_id: string,
    user_name: string
}

export const submitIdeaComment = async (data: FormInput): Promise<any> => {


    // console.log(data)
    // return

    const url = serverUrl + "/feedback/issues/comments"

    const res = await fetch(url, {
        method: "POST",
        // mode:"no-cors",
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify(data)
    })

    const result = await res.json()
    return result
};

