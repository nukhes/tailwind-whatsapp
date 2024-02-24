interface MessageProps {
    text: string
    hour: string
    mine: boolean
}

export function ChatMessage({ text, hour, mine}: MessageProps) {

    if (mine == true) {
        return (
            <div className="
            bg-teal-900 p-2 rounded-lg max-w-96 w-fit text-justify right-0 ml-auto
            flex flex-col items-end
            ">

                <span className="text-sm">{text}</span>
                <span className="text-xs text-slate-400">{hour}</span>

            </div>
        );
    } else {
        return (
            <div className="
            bg-slate-700 p-2 rounded-lg max-w-96 w-fit text-justify right-0
            flex flex-col items-end
            ">

                <span className="text-sm">{text}</span>
                <span className="text-xs text-slate-400">{hour}</span>

            </div>
        );
    }

}