import Link from "next/link";

const LeftFooter = () => {
    return ( 
        <div>
            <ul className="contact-main__form  fade-top">
                      <li className="">
                        <h4>General&nbsp;enquiry</h4>          
                      </li>
                      <li className="row gape">
                        <Link href="../../pages/contact-us.tsx">Sales enquiry</Link>                    
                      </li>
                      <li className="">
                       <Link href="../../pages/contact-us.tsx">Media enquiry</Link>                    
                      </li>
                      <li className="">
                       <link href="../../pages/contact-us.tsx">Download enquiry</link>                  
                      </li>
                      <li className="form-cta justify-content-start">
                        <button type="submit" className="btn btn--primary pt-10">
                          Get A Qute
                        </button>
                        </li>
                    </ul>
        </div>
     );
}
 
export default LeftFooter;