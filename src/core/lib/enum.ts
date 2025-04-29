export const FeedbackStatus: any = {
    "under_review": {
        value: "under_review",
        label: "Under Review",
        darkMode: {
            text: "#D2D3E0",
            color:"#1B1D21",
            border: "#313337",
            icon: `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#98989F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-scan-eye-icon lucide-scan-eye">
            <path d="M3 7V5a2 2 0 0 1 2-2h2"/>
            <path d="M17 3h2a2 2 0 0 1 2 2v2"/>
            <path d="M21 17v2a2 2 0 0 1-2 2h-2"/>
            <path d="M7 21H5a2 2 0 0 1-2-2v-2"/>
            <circle cx="12" cy="12" r="1"/>
            <path d="M18.944 12.33a1 1 0 0 0 0-.66 7.5 7.5 0 0 0-13.888 0 1 1 0 0 0 0 .66 7.5 7.5 0 0 0 13.888 0"/>
            </svg>`
        },
        lightMode: {
            text: "#303540",
            color:"#ffffff",
            border: "#3133374D",
            icon: `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#30354099" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-scan-eye-icon lucide-scan-eye">
            <path d="M3 7V5a2 2 0 0 1 2-2h2"/>
            <path d="M17 3h2a2 2 0 0 1 2 2v2"/>
            <path d="M21 17v2a2 2 0 0 1-2 2h-2"/>
            <path d="M7 21H5a2 2 0 0 1-2-2v-2"/>
            <circle cx="12" cy="12" r="1"/>
            <path d="M18.944 12.33a1 1 0 0 0 0-.66 7.5 7.5 0 0 0-13.888 0 1 1 0 0 0 0 .66 7.5 7.5 0 0 0 13.888 0"/>
            </svg>`
        }
    },
    "planned": {
        value: "planned",
        label: "Planned",
        darkMode: {
            text: "#D2D3E0",
            color:"#1B1D21",
            border: "#313337",
            icon: `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#98989F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calendar-icon lucide-calendar">
            <path d="M8 2v4"/><path d="M16 2v4"/>
            <rect width="18" height="18" x="3" y="4" rx="2"/>
            <path d="M3 10h18"/>
            </svg>`
        },
        lightMode: {
            text: "#303540",
            color:"#ffffff",
            border: "#3133374D",
            icon: `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#30354099" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calendar-icon lucide-calendar">
            <path d="M8 2v4"/><path d="M16 2v4"/>
            <rect width="18" height="18" x="3" y="4" rx="2"/>
            <path d="M3 10h18"/>
            </svg>`
        }
    },
    "in_progress": {
        value: "in_progress",
        label: "In Progress",
        darkMode: {
            text: "#D2D3E0",
            color:"#1B1D21",
            border: "#313337",
            icon: `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#98989F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-arrow-right-icon lucide-circle-arrow-right">
            <circle cx="12" cy="12" r="10"/>
            <path d="M8 12h8"/>
            <path d="m12 16 4-4-4-4"/>
            </svg>`
        },
        lightMode: {
            text: "#303540",
            color:"#ffffff",
            border: "#3133374D",
            icon: `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#30354099" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-arrow-right-icon lucide-circle-arrow-right">
            <circle cx="12" cy="12" r="10"/>
            <path d="M8 12h8"/>
            <path d="m12 16 4-4-4-4"/>
            </svg>`
        }
    },
    "completed": {
        value: "completed",
        label: "Completed",
        darkMode: {
            text: "#D2D3E0",
            color:"#1B1D21",
            border: "#313337",
            icon: `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#98989F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check-icon lucide-circle-check">
            <circle cx="12" cy="12" r="10"/>
            <path d="m9 12 2 2 4-4"/>
            </svg>`
        },
        lightMode: {
            text: "#303540",
            color:"#ffffff",
            border: "#3133374D",
            icon: `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#30354099" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check-icon lucide-circle-check">
            <circle cx="12" cy="12" r="10"/>
            <path d="m9 12 2 2 4-4"/>
            </svg>`
        }
    },
    "closed": {
        value: "closed",
        label: "Closed",
        darkMode: {
            text: "#D2D3E0",
            color:"#1B1D21",
            border: "#313337",
            icon: `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#98989F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-slash-icon lucide-circle-slash">
            <circle cx="12" cy="12" r="10"/>
            <line x1="9" x2="15" y1="15" y2="9"/>
            </svg>`
        },
        lightMode: {
            text: "#303540",
            color:"#ffffff",
            border: "#3133374D",
            icon: `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#30354099" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-slash-icon lucide-circle-slash">
            <circle cx="12" cy="12" r="10"/>
            <line x1="9" x2="15" y1="15" y2="9"/>
            </svg>`
        }
    }
}

export const FeedbackTypes: any = {
    feature: {
        label: "Feature",
        value: "feature",
        color: "rgba(59, 130, 246,0.1)",
        text: "rgba(59, 130, 246,1)",
        border: "rgba(59, 130, 246,0.2)",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="rgba(59, 130, 246,1)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-diamond-plus-icon lucide-diamond-plus">
        <path d="M12 8v8"/>
        <path d="M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0z"/>
        <path d="M8 12h8"/>
        </svg>`
    },
    bug: {
        label: "Bug",
        value: "bug",
        color: "rgba(239 ,68 ,68,0.1)",
        text: "rgba(239 ,68 ,68,1)",
        border: "rgba(239 ,68 ,68,0.2)",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="rgba(239 ,68 ,68,1)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bug-icon lucide-bug">
        <path d="m8 2 1.88 1.88"/><path d="M14.12 3.88 16 2"/>
        <path d="M9 7.13v-1a3.003 3.003 0 1 1 6 0v1"/>
        <path d="M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6"/>
        <path d="M12 20v-9"/><path d="M6.53 9C4.6 8.8 3 7.1 3 5"/><path d="M6 13H2"/>
        <path d="M3 21c0-2.1 1.7-3.9 3.8-4"/><path d="M20.97 5c0 2.1-1.6 3.8-3.5 4"/>
        <path d="M22 13h-4"/><path d="M17.2 17c2.1.1 3.8 1.9 3.8 4"/>
        </svg>`
    },
    improvement: {
        label: "Improvement",
        value: "improvement",
        color: "rgba(34 ,197 ,94,0.1)",
        text: "rgba(34 ,197 ,94,1)",
        border: "rgba(34 ,197 ,94,0.2)",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="rgba(34 ,197 ,94,1)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-wrench-icon lucide-wrench">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
        </svg>`
    },
    task: {
        label: "Task",
        value: "task",
        color: "rgba(234 ,179 ,8,0.1)",
        text: "rgba(234 ,179 ,8,1)",
        border: "rgba(234 ,179 ,8,0.2)",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="rgba(234 ,179 ,8,1)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-list-icon lucide-list">
        <path d="M3 12h.01"/>
        <path d="M3 18h.01"/>
        <path d="M3 6h.01"/>
        <path d="M8 12h13"/>
        <path d="M8 18h13"/>
        <path d="M8 6h13"/>
        </svg>`
    },
    question: {
        label: "Question",
        value: "question",
        color: "rgba(168 ,85 ,247,0.1)",
        text: "rgba(168 ,85 ,247,1)",
        border: "rgba(168 ,85 ,247,0.2)",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="rgba(168 ,85 ,247,1)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-help-icon lucide-circle-help">
        <circle cx="12" cy="12" r="10"/>
        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
        <path d="M12 17h.01"/>
        </svg>`
    }
}

export const FeedbackTypesArray = Object.keys(FeedbackTypes).map((item) => ({ value: item, label: FeedbackTypes[item]?.label }))


export const SubmissionMode = Object.freeze({
    feedback: "feedback",
    announcement: "announcement",
})