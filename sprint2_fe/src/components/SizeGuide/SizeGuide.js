import Footer from "../Foooter/Footer";
import HeaderSalesPage from "../Header/HeaderSalesPage";
import "./SizeGuide.css";

export default function SizeGuide(){

    return(
        <>
            <HeaderSalesPage></HeaderSalesPage>
            <div className="container">
                <main id="page-content">
                    <div id="shopify-section-template--16974611906729__main" className="shopify-section"><div className="central content py-medium">
                        <h1 className="feature-header text-center">Size Chart</h1>

                        <div className="rte" data-cc-animate-delay="0.2s">
                            <div>
                                <h2 className="text-left" data-mce-style="text-align: left;">RING SIZING</h2>
                                <ol>
                                    <li className="text-left" >Cut a thin strip of paper, about 10-12cm long.</li>
                                    <li className="text-left" >Wrap the strip of paper tightly around your desired finger.</li>
                                    <li className="text-left" >Using a pen or pencil, mark the point where the paper overlaps itself.</li>
                                    <li className="text-left" >Lay the strip of paper on a flat surface and use a ruler to measure the distance from the end of the strip to the marking you made, in millimetres. This will give you a measurement of the circumference of your finger.</li>
                                    <li className="text-left" >Using the below chart, convert your measurement into a standard US ring size.</li>
                                    <li className="text-left" >If you are in between two sizes, it is always best to round up rather than down. </li>
                                </ol>
                                <ol></ol>
                            </div>
                            <div className="text-center" data-mce-style="text-align: center;"></div>
                            <div className="text-center" data-mce-style="text-align: center;"><img data-mce-fragment="1" src="https://cdn.shopify.com/s/files/1/0589/2105/8473/files/size-guild_1024x1024.jpg?v=1709258815" alt="" data-mce-src="https://cdn.shopify.com/s/files/1/0589/2105/8473/files/size-guild_1024x1024.jpg?v=1709258815"/>
                            </div>
                            <div className="text-center" data-mce-style="text-align: left;">
                                <h3></h3>
                            </div>
                            <div>
                                <h2 id="bracelet-sizing">BRACELET SIZING</h2>
                                <p>All bracelet sizing on our website is listed as a measurement in inches (i.e. Size 8 is 8” long with an inner circumference of 8”). Watch the below video and follow the steps to determine your size.</p>
                                <ol>
                                    <li className="text-left" data-mce-style="text-align: left;">Ensure that you have left enough slack that the bracelet can move freely around your wrist.</li>
                                    <li className="text-left" data-mce-style="text-align: left;">Pinch the spot where the bracelet overlaps itself between two fingers, and remove the string from your wrist.</li>
                                    <li className="text-left" data-mce-style="text-align: left;">Continue to pinch the string in this spot, and lay it on a flat surface. With your other hand, mark this spot on the string using a pen.</li>
                                    <li className="text-left" data-mce-style="text-align: left;">In inches, measure from the end of the string to the marking you have made.</li>
                                    <li className="text-left" data-mce-style="text-align: left;">Your size is the measurement in inches (i.e. a measurement of 7.5” means you should order a Size 7.5). If you are in between two sizes, it is always best to round up rather than down.</li>
                                </ol>
                            </div>
                        </div>
                    </div>


                    </div>
                    <aside className="faq-sidebar" id="faq-sidebar" data-cc-animate></aside>
                </main>
            </div>
            <Footer></Footer>
        </>
    )
}