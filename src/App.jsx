import { useState } from 'react'
import { Client } from './components/client/Client'
import { useEffect } from 'react'
import { loadScripts } from './loadJS/helper'
import { loadLink } from './loadJS/helper'
import { Routes, Route } from 'react-router-dom'

import { About } from './components/client/About'
import { Cart } from './components/client/Cart'
import { Checkout } from './components/client/Checkout'
import { Contact } from './components/client/Contact'
import { Detail } from './components/client/Detail'
import { Faq } from './components/client/Faq'
import { Home } from './components/client/Home'
import { Login } from './components/client/Login'
import { Privacy } from './components/client/Privacy'
import { Setting } from './components/client/Setting'
import { Shop } from './components/client/Shop'
import { Term } from './components/client/Term'
import { Transaction } from './components/client/Transaction'
import { Register } from './components/client/Register'
import { Admin } from './components/admin/Admin'
import { Products } from './components/admin/Products'
import { Order } from './components/admin/Order'
import { Users } from './components/admin/Users'


function App() {

  // useEffect(() => {

  //   loadLink([
  //     "../node_modules/react-multi-carousel/lib/styles.css",
  //   ]);
  //   loadScripts([
  //     "../assets/js/jquery.js",
  //     "../assets/js/jquery-migrate.js",
  //     "../assets/packages/bootstrap/libraries/popper.js",
  //     "../assets/packages/bootstrap/bootstrap.js",
  //     "../assets/packages/o2system-ui/o2system-ui.js",
  //     "../assets/packages/cloudzoom/cloudzoom.js",
  //     "../assets/packages/thumbelina/thumbelina.js",
  //     "../assets/packages/bootstrap-touchspin/bootstrap-touchspin.js",
  //     "../assets/js/theme.js",
  //   ]);

  // }, [])
  // const [isMount, setIsMount] = useState(false);
  // useEffect(() => {
  //   if (isMount) {
  //     document.body.className = 'hold-transition skin-blue sidebar-mini';
  //     // Load CSS
  //     let links = loadLink([
  //       'bower_components/bootstrap/dist/css/bootstrap.min.css',
  //       'bower_components/font-awesome/css/font-awesome.min.css',
  //       'bower_components/Ionicons/css/ionicons.min.css',
  //       'dist/css/AdminLTE.min.css',
  //       'dist/css/skins/_all-skins.min.css',
  //     ]);
  //     // Load file scripts của layout client
  //     let scripts = loadScripts([
  //       'bower_components/jquery/dist/jquery.min.js',
  //       'bower_components/bootstrap/dist/js/bootstrap.min.js',
  //       'bower_components/jquery-slimscroll/jquery.slimscroll.min.js',
  //       'bower_components/fastclick/lib/fastclick.js',
  //       'dist/js/adminlte.min.js',
  //       'dist/js/demo.js',
  //     ]);
  //     return () => {

  //       for (let src of scripts) {
  //         src.remove();
  //       }

  //       for (let link of links) {
  //         link.remove();
  //       }
  //     }
  //   } else {
  //     setIsMount(true);
  //   }
  // }, [isMount])

  const [isMount, setIsMount] = useState(false);
  useEffect(() => {
    if (isMount) {

      // Load CSS
      // let links = loadLink([
      //     "../../../node_modules/react-multi-carousel/lib/styles.css",
      // ]);
      // Load file scripts của layout client
      let scripts = loadScripts([
        "../../../assets/js/jquery.js",
        "../../../assets/js/jquery-migrate.js",
        "../../../assets/packages/bootstrap/libraries/popper.js",
        "../../../assets/packages/bootstrap/bootstrap.js",
        "../../../assets/packages/o2system-ui/o2system-ui.js",
        "../../../assets/packages/cloudzoom/cloudzoom.js",
        "../../../assets/packages/thumbelina/thumbelina.js",
        "../../../assets/packages/bootstrap-touchspin/bootstrap-touchspin.js",
        "../../../assets/js/theme.js",
      ]);
      return () => {

        for (let src of scripts) {
          src.remove();
        }

        // for (let link of links) {
        //     link.remove();
        // }
      }
    } else {
      setIsMount(true);
    }
  }, [isMount])

  return (
    <>
      {/* route */}

      <Routes>
        <Route path='/' element={<Client />}>
          {/* <Route index element={<Home />} /> */}
          <Route index element={<Home />} />
          <Route path='contact' element={<Contact />} />
          <Route path='about' element={<About />} />
          <Route path='detail' element={<Detail />} />
          <Route path='cart' element={<Cart />} />
          <Route path='checkout' element={<Checkout />} />
          <Route path='faq' element={<Faq />} />
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
          <Route path='privacy' element={<Privacy />} />
          <Route path='setting' element={<Setting />} />
          <Route path='shop' element={<Shop />} />
          <Route path='term' element={<Term />} />
          <Route path='transaction' element={<Transaction />} />
        </Route >
        <Route path='/admin' element={<Admin />}>
          <Route index element={<Products />} />
          <Route path='users' element={<Users />} />
          <Route path='order' element={<Order />} />
        </Route>
      </Routes >

    </>
  )
}

export default App
