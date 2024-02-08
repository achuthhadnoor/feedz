import Icon from "@/components/icons/icon";

interface ILayoutProps {
    children: React.ReactNode;
}

export default async function Layout({ children }: ILayoutProps) {
    return (
        <>
            <div className="flex gap-4 items-center px-5 py-2 justify-between border-b-[0.5px] dark:border-b-neutral-800 border-b-neutral-300">
                <div className="flex items-center gap-2">
                    <span className="text-2xl px-2">
                        <span className="relative flex  h-6 w-6 ring-[1px] rounded  ring-neutral-500 px-1 py-1 space-x-1">
                            <div className="w-1 bg-neutral-700 rounded" />
                            {/* <div className="w-1 bg-neutral-700 rounded" /> */}
                        </span>
                    </span>
                    <span className="text-2xl text-neutral-300 dark:text-neutral-800">/</span>
                    <span className="py-2 px-1 rounded h-10  relative text-center items-center">Lapse </span>
                </div>
                <div className="flex gap-3">
                    <span className=" ring-1 dark:ring-neutral-800 ring-neutral-400 text-neutral-700 dark:text-neutral-300 p-2 hover:bg-neutral-100 hover:dark:bg-neutral-900 rounded-full h-8 w-8 flex justify-center items-center"><Icon name="feedback" /></span>
                    <span className=" ring-1 dark:ring-neutral-800 ring-neutral-400 text-neutral-700 dark:text-neutral-300 p-2 hover:bg-neutral-100 hover:dark:bg-neutral-900 rounded-full h-8 w-8 flex justify-center items-center"><Icon name="refresh" /></span>
                    <span className=" ring-1 dark:ring-neutral-800 ring-neutral-400 text-neutral-700 dark:text-neutral-300 p-2 hover:bg-neutral-100 hover:dark:bg-neutral-900 rounded-full h-8 w-8 flex justify-center items-center"><Icon name="bell" /></span>
                    <div className="flex gap-1">
                        <span className="text-neutral-300 dark:text-neutral-600 flex justify-center items-center">|</span>
                        <span className=" ring-1 dark:ring-neutral-800 ring-neutral-400 text-neutral-700 dark:text-neutral-300 p-2 hover:bg-neutral-100 hover:dark:bg-neutral-900 rounded-full h-8 w-8 flex justify-center items-center text-xs">HA</span>
                    </div>
                </div>
            </div>
            <div className="">{children}</div>
        </>
    );
}
