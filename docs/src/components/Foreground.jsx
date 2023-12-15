import Card from "./Card"

const Foreground = () => {
    return (
        <div className="flex w-full h-full fixed top-0 left-0 z-[3]">
            <Card />
            <Card />
            <Card />
        </div>
    )
}

export default Foreground