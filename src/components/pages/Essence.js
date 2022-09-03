// import React from 'react'
import React, { useState, useEffect, Component } from "react";
// import sofa from '../images/sofa.png'
// import '../App.css'
import { async, uuidv4 } from "@firebase/util";
import "../../App.css";
import Logo from './Logo.png'
import "../HeroSection.css";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import FlatList from "flatlist-react";
import "../Navbar.css";
import { db, storage } from "../../firebase";
import { AiFillPlusSquare } from "react-icons/ai";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Navbar from "../Navbar";
import { addDoc, collection,  doc,  getDocs} from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
// import storage
// ref
function Essence() {
  const [state, setState] = useState({
    isPaneOpen: false,
    isPaneOpenLeft: false,
  });
  const Essence = [
    {
      productName: "Essence Duo Sharpener",
      productOffPrice: "630",
      productOnPrice: "470",
      OffPrice: "860",
      productimg: "../Essence/Essence1.PNG",
      Discription:
        "Now big volume meets bouncy curl. Colossal Curl Bounce mascara turns up the volume and curls up every lash without clumps. Up to 24HR wear. Colossal Curl Bounce turns up the volume. Now big volume meets bouncy curl. Its Curl ’N’ Bounce brush separates and curls lashes while its Memory-Curl formula gives curl that lasts. This long wearing mascara delivers lasting bouncy lashes. Defies clumps. Defies smudging. Defies flaking. Up to 24HR wear. For best results, hold Maybelline Colossal Curl Bounce's brush against lashes and extend from root to tip repeatedly in an upwards motion until desired volume and curl is achieved.",
      video: "../Essence/vid.mp4",
    },
    {
      productName: "Essence Bye Panda Eyes!",
      productOffPrice: "1,99",
      productOnPrice: "839",
      OffPrice: "560",
      video: "../Essence/vid.mp4",

      productimg: "../Essence/Essence2.PNG",
      Discription:
        "Maybelline Baby Skin Instant Pore Eraser Primer This makeup primer leaves skin with a baby smooth and matte finish. Moisturizes all day. How to apply/use  Step 1. Apply a thin layer to skin. Step 2. Can be worn with or without a moisturizer..",
    },
    {
      productName: "Essence Skin Lovin ",
      productOffPrice: "1,995",
      productOnPrice: "1,197",
      OffPrice: "798",
      video: "../Essence/vid.mp4",

      productimg: "../Essence/Essence3.PNG",
      Discription:
        "Falsies Lash Lift Mascara Is A Lifting Mascara That Delivers Dramatic Length And Volume BENEFITS Get an instant lash lift effect from a mascara. Falsies Lash Lift mascara with fiber delivers dramatic volume and long, lifted lashes - a mascara that looks like false eyelashes! Our double curved lifting brush and fiber-infused formula grabs lashes at the root to lift, thicken, and lengthen. No clumps, smears, or flakes, just volume and the look of longer eyelashes that lasts all day..",
    },
    {
      productName: "Essence 24ever Defined Volume",
      productOffPrice: "1,890",
      productOnPrice: "1,134",
      OffPrice: "756",
      video: "../Essence/vid.mp4",

      productimg: "../Essence/Essence4.PNG",
      Discription:
        "The New Super BB Ultra cover banishes your flaws in one swipe with SPF 50 for super UA protention. Dark spots & Circles, Pores, Fine Lines, Redness, Acne Marks, Skin Dullness, Unevenness & lack of radiance…all Ultra covered..",
    },
  ];
  let history = useHistory();
  const [ProductName, setProductName] = useState("");
  const [ProductDiscount, setProductDiscount] = useState("");
  const [ProductPrice, setProductPrice] = useState("");
  const [ProductOff, setProductOff] = useState("");
  const [Discription, setDiscription] = useState("");
  const [state1, setState1] = useState("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png");
  const location = useLocation();
  const [EssenceData,SetEssenceData]=useState([])
  const vedio = location.state.vedio;
  const imageHandler = (e) => {
       if(e.target.files[0]){
        setState1(e.target.files[0]);
       }
       
    };
  const [button, setButton] = useState(true);

  const Render = (item) => {
    // const IMagePicker = () => {}

    return (
      <div
        style={{
          height: 410,
          width: 340,
        }}
      >
        <img
          style={{
            width: "100%",
            height: "70%",
          }}
          src={item.productimg}
        />

        <text
          style={{
            fontSize: 16,
            height: 20,
            width: "100%",
          }}
        >
          {item.productName}
        </text>
        <div
          style={{
            flexDirection: "row",
            // justifyContent: 'center',
            alignItems: "center",
            marginTop: 12,
            display: "flex",
          }}
        >
          <text
            style={{
              fontSize: 13,
              marginRight: 10,
              textDecorationLine: "line-through",
              color: "grey",
            }}
          >
            Rs.{item.productOffPrice}
          </text>
          <text
            style={{
              color: "red",
              fontSize: 17,
              fontWeight: "bold",
            }}
          >
            Rs.{item.productOnPrice}
          </text>
        </div>

        <div
          style={{
            marginTop: "7%",

            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#F7C17C",
            height: 40,
            borderRadius: 10,
            flexDirection: "row",
            display: "flex",
          }}
        >
          <text
            style={{
              marginRight: 10,
              color: "#fff",
              fontSize: 16,
              fontWeight: "bold",
            }}
          >
            Remove Items
          </text>
          {/* <AiOutlineShoppingCart size={20} color={'#fff'} /> */}
        </div>
      </div>
    );
  };
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  const GetDoc=()=>{
   getDocs( collection(db,'Essence')).then(querySnapshot => {
    console.log('Total users: ', querySnapshot.size);
    SetEssenceData([])
    querySnapshot.forEach(documentSnapshot => {
      console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
      const d={
         "id":documentSnapshot.id,
        "products":documentSnapshot.data()
      }
      // SetEssenceData((EssenceData)=>[...EssenceData,d])
   
    });
  });
  }

  useEffect(() => {
    showButton();
    GetDoc();
  }, []);
  // console.log(SubArray)
  window.addEventListener("resize", showButton);
  // console.log(SubArray)
  const uploadImage =  () => {
      const imageRef=ref(storage,uuidv4.call());
     uploadBytes(imageRef,state1).then(()=>{
      getDownloadURL(imageRef).then(async(url)=>{
        setState1(url)
        try {
          await addDoc(collection(db, "Essence"), {
            productName: ProductName,
            productOffPrice:ProductOff,
            productOnPrice: ProductDiscount,
            Description: Discription,
            productimg:url
          });
        } catch (err) {
          alert(err);
        }
      }).catch((e)=>{
        alert("SomeThing Went Wrong")
      })
     }).catch((e)=>{
      alert("SomeThing Went Wrong")
    })
     
  
  };
  const handleSubmit = async (e) => {
    // e.preventDefault()
   uploadImage();
  };
  return (
    <div>
      <Navbar />
      <div className="hero-container">
        <div
          style={{
            paddingLeft: 20,
            paddingRight: 100,
          }}
        >
          <FlatList
            style={
              {
                // marginRight: '5%',
              }
            }
            list={Essence}
            display={{
              grid: true,
              // minColumnWidth: '10px',
              gridGap: "150px",
            }}
            renderItem={Render}
          />
          <AiFillPlusSquare
            onClick={() => setState({ isPaneOpenLeft: true })}
            style={{
              color: "#f7c17c",
              // width: 200,
              // height: 100,
            }}
            size={150}
          />
        </div>
      </div>
      <SlidingPane
        isOpen={state.isPaneOpenLeft}
        from="top"
        width="100%"
        onRequestClose={() => setState({ isPaneOpenLeft: false })}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          <h1
            style={{
              fontSize: 40,
              fontWeight: "bold",
            }}
          >
            ADD PRODUCT
          </h1>
          <img
            style={{
              width: '30%',
              marginLeft: '20%',
              height: '40%',
            }}
            src={state1}
          />
          <input
            type="file"
            accept="image/*"
            name="image-upload"
            id="input"
            onChange={imageHandler}
          />
          <form
            style={{
              marginTop: 60,
              paddingLeft: 99,
            }}
          >
            <label>
              Enter the Product Name
              <input
                type="text"
                value={ProductName}
                style={{
                  width: "39%",
                  paddingLeft: "1%",
                  height: 40,
                  marginLeft: "4%",
                }}
                placeholder={"Enter the Product Name"}
                onChange={(e) => setProductName(e.target.value)}
              />
            </label>
          </form>

          <form
            style={{
              paddingLeft: 103,
              marginTop: "1%",
            }}
          >
            <label>
              Enter Product OnPrice
              <input
                type="text"
                value={ProductDiscount}
                style={{
                  width: "39%",
                  paddingLeft: "1%",
                  height: 40,
                  marginLeft: "4%",
                }}
                placeholder={"Enter Product on Price"}
                onChange={(e) => setProductDiscount(e.target.value)}
              />
            </label>
          </form>
      
          <form
            style={{
              paddingLeft: 148,
              marginTop: "1%",
            }}
          >
            <label>
              Enter Product Off
              <input
                type="text"
                value={ProductOff}
                style={{
                  width: "40%",
                  paddingLeft: "1%",
                  height: 40,
                  marginLeft: "4%",
                }}
                placeholder={" Enter Product Off"}
                onChange={(e) => setProductOff(e.target.value)}
              />
            </label>
          </form>
          <form
            style={{
              paddingLeft: 124,
              marginTop: "1%",
            }}
          >
            <label>
              {/* Enter Last Name */}
              Enter The Discription
              <input
                type="text"
                value={Discription}
                style={{
                  width: "39%",
                  paddingLeft: "1%",
                  height: 40,
                  marginLeft: "4%",
                  // backgroundColor: 'pink',
                }}
                placeholder={" Enter The Discription"}
                onChange={(e) => setDiscription(e.target.value)}
              />
            </label>
          </form>
          <div
            style={{
              flexDirection: "row",
              display: "flex",
            }}
          >
            <button
              onClick={handleSubmit}
              style={{
                borderWidth: 0,
                height: 50,
                width: 120,
                marginTop: "4%",
                marginLeft: "9%",
                borderRadius: 16,
                backgroundColor: "#f7c17c",
                alignItems: "center",
                marginRight: "10%",
                justifyContent: "center",
                display: "flex",
              }}
            >
              <text
                style={{
                  fontWeight: 20,
                  color: "#fff",
                }}
              >
                Add New
              </text>
            </button>
          </div>
        </div>
      </SlidingPane>
    </div>
  );
}
export default Essence;
