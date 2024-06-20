import { SectionDefInjected } from "./components/SectionDefInjected";
import { SectionKeyed } from "./components/SectionKeyed";
import { mockData } from "./mockData"


export const SectTranslate = () => {
    return (
        <div className="bg-[#1f1f1f] min-[100%] overflow-auto text-[#ddd] px-4">
            <SectionDefInjected data={mockData} />

            <SectionKeyed data={mockData} />
        </div>
    )
}