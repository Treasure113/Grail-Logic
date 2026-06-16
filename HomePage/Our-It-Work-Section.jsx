import { Button } from "./Header"

const image1 = '/auth-image.png'
const image2 = '/trading-acct-image.png'
const image3 = '/testimony-1.png'


function Cards() {
    return (
        <div className="w-full">
            <div className="flex flex-col items-center gap-8 md:gap-12">

                {/* Card 1 */}
                <div
                    className="
                        w-full
                        lg:max-w-[1050px]
                        flex
                        flex-col
                        md:flex-row
                        md:items-stretch
                        overflow-hidden
                        rounded-xl
                        border border-[#1D1B3D]
                        bg-gradient-to-r
                        from-[#100E24]
                        to-[#161233]
                    "
                >
                    {/* Text */}
                    <div className="flex-1 flex flex-col justify-center gap-4 p-6 md:p-8">
                        <h1 className="text-[20px] md:text-2xl font-semibold">
                            Create your Grail Logic account
                        </h1>

                        <p className="text-[#8F9BB7] font-normal">
                            Sign up to start trading smarter with Grail Logic.
                            Create your account to access automated trade mirroring,
                            real-time updates, and tools designed to help you grow
                            with confidence.
                        </p>
                    </div>

                    {/* Image */}
                    <div className="relative flex-1 flex items-center justify-center bg-[#0E1330] min-h-[320px] overflow-hidden">
                        {/* Glow */}
                        <div className="absolute w-32 h-32 bg-[#32CAFD] blur-3xl rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

                        <img
                            src={image1}
                            alt="Create account"
                            className="relative z-10 w-full max-w-[500px] h-auto p-4"
                        />
                    </div>
                </div>


            <div className="flex flex-col gap-8 md:flex-row md:gap-6 md:max-w-[1050px]">

                {/* Card 2 */}
                <div
                    className="
                        w-full
                        lg:max-w-[1050px]
                        flex
                        flex-col
                        md:flex-row
                        gap-6
                    "
                >
                    <div
                        className="
                            flex-1
                            relative
                            overflow-hidden
                            rounded-xl
                            border
                            border-[#1D1B3D]
                            bg-gradient-to-r
                            from-[#100E24]
                            to-[#161233]
                        "
                    >
                        {/* Image Section */}
                        <div className="relative flex justify-center items-center p-8 min-h-[350px]">
                            {/* Glow Effects */}
                            <div className="absolute w-32 h-32 bg-[#41E88D] blur-3xl rounded-full top-0 right-0 -translate-x-1/2 -translate-y-1/2" />

                            <div className="absolute w-20 h-20 bg-[#7214FF] blur-3xl rounded-full -bottom-5 left-10" />

                            <img
                                src={image2}
                                alt="Connect account"
                                className="relative z-10 w-full max-w-[280px]"
                            />
                        </div>

                        {/* Content */}
                        <div className="bg-[#0E1330] border-t border-[#282D45] p-5 md:p-6 md:mt-8">
                            <h1 className="text-xl font-semibold mb-2">
                                Connect your account
                            </h1>

                            <p className="text-sm text-white/50">
                                Link your MT4 or MT5 broker account using our
                                securely encrypted integration.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Card 3 */}
                <div
                    className="
                        w-full
                        lg:max-w-[1050px]
                        flex
                        flex-col
                        md:items-stretch
                        overflow-hidden
                        rounded-xl
                        border
                        border-[#1D1B3D]
                        bg-gradient-to-r
                        from-[#100E24]
                        to-[#161233]
                        relative
                    "
                >
                    {/* Purple Glow */}
                    <div className="absolute hidden md:block w-24 h-24 bg-[#7214FF] blur-3xl rounded-full -translate-y-1/2 translate-x-1/2 left-1/2" />

                    {/* Text */}
                    <div className="flex-1 flex flex-col justify-center gap-4 p-6 md:p-8">
                        <h1 className="text-[20px] md:text-2xl font-semibold">
                            Every trade is mirrored automatically
                        </h1>

                        <p className="text-[#8F9BB7] font-normal">
                            Your account mirrors the master in real time with
                            fully automated trading.
                        </p>
                    </div>

                    {/* Table */}
                    <div className="flex-1 bg-[#0E1330] min-h-[320px] flex items-center justify-center p-4">
                        <div className="w-full max-w-[500px]">
                            <TradeTable />
                        </div>
                    </div>
                </div>
            </div>

                {/* CTA */}
                <Button
                    label="Connect your account"
                    className="w-fit px-8 py-4"
                />
            </div>
        </div>
    );
}


function TradeTable({text1, text2, text3}) {
    return (
        <table class="custom-table">
  <thead>
    <tr>
      <th>Pair</th>
      <th>Action</th>
      <th>Profit/Loss</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>EUR/USD</td>
      <td>Buy</td>
      <td class="text-[#29A645]">+$340.25</td>
    </tr>
    <tr>
      <td>GBP/JPY</td>
      <td>Sell</td>
      <td class="text-[#F04438]">-$120.00</td>
    </tr>
    <tr>
      <td>USD/CAD</td>
      <td>Buy</td>
      <td class="text-[#29A645]">+$210.00</td>
    </tr>
    <tr>
      <td>USD/CAD</td>
      <td>Buy</td>
      <td class="text-[#29A645]">+$210.00</td>
    </tr>
    <tr>
      <td>USD/CAD</td>
      <td>Buy</td>
      <td class="text-[#29A645]">+$210.00</td>
    </tr>
  </tbody>
</table>

    );
};

export function Testimonials() {
    return (
                <div className="flex flex-col justify-center py-12 items-center gap-12 md:py-12">
                    <div className="flex flex-col justify-center items-center gap-2 lg:gap-8">
                        <h1 className="text-[20px] lg:text-[44px]">What Our Traders Are Saying</h1>
                        <p className="text-[#EEEEEE] text-center opacity-80 text-sm md:w-1/2">These are real people with real results. Hear how Grail Logic is helping users grow their trading accounts with confidence and zero stress.</p>
                    </div>

                    <div className="w-full flex gap-2 flex-nowrap overflow-x-scroll md:gap-4 lg:max-w-[1050px]">
                        <div className="relative shrink-0">
                            {/* Overlay */} <div className="absolute z-10 inset-0 w-[160px] h-[220px] top-0 left-0 bg-gradient-to-r from-black to-[#0D0D0D00]"></div>
                            <div className="relative p-3 flex flex-col gap-3 rounded-md border border-gradient-to-r from-[#222222] to-[#22222200] ">
                                <p className="text-white text-left text-sm leading-[28px] opacity-60 w-[18rem]">
                                    I knew nothing about forex before joining Grail Logic. After connecting my account, I started seeing consistent results within the first few weeks. I’ve never looked back.
                                </p>
                                <div className="flex gap-2">
                                    <img src={image3} className="rounded-full"/>
                                    <div className="flex flex-col gap-1">
                                        <p className="text-white text-sm">Tolu A.</p>
                                        <p className="text-sm text-white opacity-50">First-time Trader</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative shrink-0">
                            {/* Overlay */} <div className="absolute z-10 inset-0 w-[160px] h-[220px] top-0 left-0 bg-gradient-to-r from-black to-[#0D0D0D00]"></div>
                            <div className="relative p-3 flex flex-col gap-3 rounded-md border border-gradient-to-r from-[#222222] to-[#22222200] ">
                                <p className="text-white text-left text-sm leading-[28px] opacity-60 w-[18rem]">
                                    I knew nothing about forex before joining Grail Logic. After connecting my account, I started seeing consistent results within the first few weeks. I’ve never looked back.
                                </p>
                                <div className="flex gap-2">
                                    <img src={image3} className="rounded-full"/>
                                    <div className="flex flex-col gap-1">
                                        <p className="text-white text-sm">Tolu A.</p>
                                        <p className="text-sm text-white opacity-50">First-time Trader</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
    )
}

export default function OurItWork() {
    return (
        <section className="pt-[48px] pr-[16px] pb-[24px] pl-[16px] bg-[#0D0D0D]">
            <div className="flex flex-col gap-12">
                <div className="text-center flex flex-col gap-4 md:w-1/2 md:translate-x-1/2">
                    <h1 className="text-[24px] leading-tight md:text-[44px]">
                        Our system mirrors trades from our strategy account to yours
                    </h1>
                    <p className="text-white opacity-80">Just connect your account and let the system handle the trades.</p>
                </div>


                <Cards />

                <Testimonials />               
            </div>
        </section>
    )
};