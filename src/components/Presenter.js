import React, { useEffect, useState } from "react";
import PaymentView from "../view/PaymentView";
import Integration from "./Integration"

function Presenter ({type}){
    const [order, setOrder] =useState("");
    const [doc, setDoc] = useState("");
    const [htmlSnippet, setHtmlSnippet] = useState("");
    const OrderData = {
        "purchase_country": "SE",
        "purchase_currency": "SEK",
        "locale": "se",
        "order_amount": 50000,
        "order_tax_amount": 4545,
        "order_lines": [
            {
                "type": "physical",
                "reference": "19-402-USA",
                "name": "Red T-Shirt",
                "quantity": 5,
                "quantity_unit": "pcs",
                "unit_price": 10000,
                "tax_rate": 1000,
                "total_amount": 50000,
                "total_discount_amount": 0,
                "total_tax_amount": 4545
            }
            ],
        "merchant_urls": {
            "terms": "https://www.example.com/terms.html",
            "checkout": "https://localhost:3000/thankyou?order_id={checkout.order.id}",
            "confirmation": "https://localhost:3000/thankyou?order_id={checkout.order.id}",
            "push": "https://localhost:3000/thankyou?order_id={checkout.order.id}"
        }
        }


       useEffect(()=>{
            Integration.createOrder(OrderData).then( data => {
                setHtmlSnippet(data.html_snippet);
                console.log("presenter" +typeof data.html_snippet);
            })
        },[])
        
            return((htmlSnippet ?
                 <div>
                    <PaymentView
                        htmlSnippet={htmlSnippet}
                    /></div> : <div>no</div>)
            )

    }

export default Presenter;