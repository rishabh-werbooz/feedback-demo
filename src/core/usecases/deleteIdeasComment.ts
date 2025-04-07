
import { serverUrl } from "../lib/config";

export const deleteIdeasComment = async ({ commentId,issueId }: { commentId: string,issueId:string }) => {

    const url = serverUrl + `/feedback/issues/comments?comment_id=${commentId}&issue_id=${issueId}`
    const res = await fetch(url, { method: "DELETE" })

    const result = await res.json()
    return result
}