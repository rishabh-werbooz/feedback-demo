export const FeedbackStatus :any = {
    "under_review": {
        value: "under_review",
        label: "UNDER REVIEW",
        color:"#facc15"
    },
    "planned": {
        value: "planned",
        label: "PLANNED",
        color:"#38bdf8"
    },
    "in_progress": {
        value: "in_progress",
        label: "IN PROGRESS",
        color:"#fb923c"
    },
    "completed": {
        value: "completed",
        label: "COMPLETED",
        color:"#4ade80"
    },
    "closed": {
        value: "closed",
        label: "CLOSED",
        color:"#f87171"
    }
}

export const FeedbackTypes: any = {
    feature:{
        label: "Feature",
        value: "feature",
        color: "#fecaca",
        text:"#dc2626"
    },
    bug:{
        label: "Bug",
        value: "bug",
        color: "#fecaca",
        text:"#dc2626"
    },
    improvement:{
        label: "Improvement",
        value: "improvement",
        color: "#fde68a", 
        text:"#d97706"
    },
    task:{
        label: "Task",
        value: "task",
        color: "#d9f99d", 
        text:"#65a30d"
    },
    question:{
        label: "Question",
        value: "question",
        color: "#bfdbfe", 
        text:"#2563eb"
    }
}

export const FeedbackTypesArray = Object.keys(FeedbackTypes).map((item) => ({ value: item, label: FeedbackTypes[item]?.label }))


export const SubmissionMode = Object.freeze({
    feedback: "feedback",
    announcement: "announcement",
})