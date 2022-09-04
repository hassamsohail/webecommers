// import React from 'react'
import React, { useState, useEffect } from 'react'
// import sofa from '../images/sofa.png'
import '../App.css'
import { Button } from './Button'
import './HeroSection.css'
import './Navbar.css'
import { async, uuidv4 } from '@firebase/util'
import FlatList from 'flatlist-react'
// import { FlatList } from 'react-native'
// import { AiFillPlusSquare } from 'react-icons/ai'
import { AiOutlineClose } from 'react-icons/ai'
import SlidingPane from 'react-sliding-pane'
import { AiFillPlusSquare } from 'react-icons/ai'
import { useHistory } from 'react-router-dom'
import { AiFillPlusCircle } from 'react-icons/ai'
import Navbar from './Navbar'
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  where,
} from 'firebase/firestore'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { db, storage } from '../firebase'
function HeroSection({}) {
  const [state, setState] = useState({
    isPaneOpen: false,
    isPaneOpenLeft: false,
  })

  const [state2, setState2] = useState({
    isPaneOpen2: false,
    isPaneOpenLeft2: false,
  })
  const [state1, setState1] = useState(
    'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
  )
  const [AllDocs, setAllDocs] = useState([])
  let history = useHistory()
  const [HeroSectionData, SetHeroSectionData] = useState([])
  const imageHandler = (e) => {
    if (e.target.files[0]) {
      setState1(e.target.files[0])
    }
  }

  const [ProductName, setProductName] = useState('')
  const [ProductDiscount, setProductDiscount] = useState('')
  const [ProductPrice, setProductPrice] = useState('')
  const [ProductOff, setProductOff] = useState('')
  const [Discription, setDiscription] = useState('')
  const Delcte = (item) => {
    //   console.log(item.id);
    //  collection(db,"HeroSection").where(item.id).then((documentSnapshot)=>{
    //   console.log(documentSnapshot.data());
    //  })
    const docref = doc(db, 'HeroSection', item.id)
    deleteDoc(docref)
      .then(() => {
        GetDoc()
        alert('Scuessfully Delected')
      })
      .catch((e) => {
        alert('Something Gone wrong')
      })
  }
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false)
    } else {
      setButton(true)
    }
  }

  const GetDoc = () => {
    getDocs(collection(db, 'HeroSection')).then((querySnapshot) => {
      console.log('Total users: ', querySnapshot.size)
      SetHeroSectionData([])
      querySnapshot.forEach((documentSnapshot) => {
        console.log('User ID: ', documentSnapshot.id, documentSnapshot.data())
        const d = {
          id: documentSnapshot.id,
          products: documentSnapshot.data(),
        }
        SetHeroSectionData((HeroSectionData) => [...HeroSectionData, d])
      })
    })
  }
  useEffect(() => {
    showButton()
    GetDoc()
  }, [])
  const uploadImage = () => {
    const imageRef = ref(storage, uuidv4.call())
    uploadBytes(imageRef, state1)
      .then(() => {
        getDownloadURL(imageRef)
          .then(async (url) => {
            setState1(url)
            try {
              await addDoc(collection(db, 'HeroSection'), {
                // productName: ProductName,
                // productOffPrice: ProductOff,
                // productOnPrice: ProductDiscount,
                // Description: Discription,
                img: url,
              }).then(() => {
                alert('Product  Sccuessfully added')
                setState({ isPaneOpen: false })
              })
            } catch (err) {
              alert(err)
            }
          })
          .catch((e) => {
            alert('SomeThing Went Wrong')
          })
      })
      .catch((e) => {
        alert('SomeThing Went Wrong')
      })
  }
  const handleSubmit = async (e) => {
    // e.preventDefault()
    uploadImage()
    // setState2({ isPaneOpenLeft2: true })
  }

  const Render = (item) => {
    // const IMagePicker = () => {}

    return (
      <div>
        <AiOutlineClose onClick={() => Delcte(item)} size={40} />
        <div
          // onClick={() => history('/Cart')}
          onClick={() => {
            history.push('/Brand', {
              // TitleMain: item.title,
              // SubArray: item.subarry,
            })
            // onClick={ClickHandle}
          }}
        >
          <img
            style={{
              width: '100%',
              height: '10%',
            }}
            src={item.products.img}
          />
        </div>
      </div>
    )
  }
  const [click, setClick] = useState(false)
  const [button, setButton] = useState(true)
  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)

  window.addEventListener('resize', showButton)

  return (
    <div>
      <Navbar />
      <div className="hero-container">
        <FlatList
          style={
            {
              // marginRight: '5%',
            }
          }
          list={HeroSectionData}
          display={
            {
              // grid: true,
              // minColumnWidth: '10px',
              // gridGap: '150px',
            }
          }
          renderItem={Render}
        />
        {/* <div className="img-main">{AllData}</div> */}
        <div
          onClick={() => setState({ isPaneOpenLeft: true })}
          style={{
            paddingLeft: '10%',
            paddingRight: '10%',
            paddingBottom: '3%',
          }}
        >
          <div
            className="border-Width"
            style={{
              // justifySelf: 'center',
              marginBottom: '5%',
              marginTop: '3%',
              // paddingBottom: '5%',
              backgroundColor: '#fff',
              boxShadow: '4px 7px 20px #f7c17c',
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '20%',
            }}
          >
            <AiFillPlusSquare
              onClick={() => setState({ isPaneOpenLeft: true })}
              style={{
                color: '#f7c17c',
                // width: 200,
                // height: 100,
              }}
              size={150}
            />
          </div>
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
            width: '100%',
            height: '100%',
          }}
        >
          <AiFillPlusCircle
            // onClick={() => setState2({ isPaneOpenLeft2: true })}
            style={{
              marginLeft: '70%',
            }}
            size={60}
          />
          <h1
            style={{
              fontSize: 40,
              fontWeight: 'bold',
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

          <div
            style={{
              flexDirection: 'row',
              display: 'flex',
            }}
          >
            <button
              onClick={handleSubmit}
              style={{
                borderWidth: 0,
                height: 50,
                width: 120,
                marginTop: '4%',
                marginLeft: '9%',
                borderRadius: 16,
                backgroundColor: '#f7c17c',
                alignItems: 'center',
                marginRight: '10%',
                justifyContent: 'center',
                display: 'flex',
              }}
            >
              <text
                style={{
                  fontWeight: 20,
                  color: '#fff',
                }}
              >
                Add New
              </text>
            </button>
          </div>
        </div>
      </SlidingPane>
      {/* <SlidingPane
        isOpen={state.isPaneOpenLeft}
        from="top"
        width="100%"
        onRequestClose={() => setState2({ isPaneOpenLeft2: false })}
      >
        <div
          style={{
            width: '100%',
            height: '100%',
          }}
        >
          <h1
            style={{
              fontSize: 40,
              fontWeight: 'bold',
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

          <div
            style={{
              flexDirection: 'row',
              display: 'flex',
            }}
          >
            <button
              onClick={handleSubmit}
              style={{
                borderWidth: 0,
                height: 50,
                width: 120,
                marginTop: '4%',
                marginLeft: '9%',
                borderRadius: 16,
                backgroundColor: '#f7c17c',
                alignItems: 'center',
                marginRight: '10%',
                justifyContent: 'center',
                display: 'flex',
              }}
            >
              <text
                style={{
                  fontWeight: 20,
                  color: '#fff',
                }}
              >
                Add New
              </text>
            </button>
          </div>
        </div>
      </SlidingPane> */}
    </div>
  )
}
export default HeroSection
