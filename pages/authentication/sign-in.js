<script src="https://cdn.tailwindcss.com"></script>
// import node module libraries
import { Row, Col, Card, Form, Button, Image } from "react-bootstrap";
import Link from "next/link";

// import authlayout to override default layout
import AuthLayout from "layouts/AuthLayout";

const SignIn = () => {
  return (
   
      <Row className="align-items-center justify-content-center g-0 min-vh-100" >
      <Col xxl={4} lg={6} md={8} xs={12} className="py-8 py-xl-0">
        {/* Card */}
        
        <Card className="smooth-shadow-md ">
          {/* Card body */}
          <Card.Body className="p-6">
            <div className="mb-8">
              <h1 className="text-center font-bold text-primary" style={{fontWeight: 600}}>Organic Market</h1>
              {/* <Link href="/">
                <Image
                  src="/images/brand/logo/logo-primary.svg"
                  className="mb-2"
                  alt=""
                />
              </Link> */}
              
            </div>
            {/* Form */}
            <Form>
              {/* Username */}
              <Form.Group className="mb-3" controlId="username">
                <Form.Label>Username or email</Form.Label>
                <Form.Control
                  type="email"
                  name="username"
                  placeholder="Enter address here"
                  required=""
                />
              </Form.Group>

              {/* Password */}
              <Form.Group className="mb-3" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="**************"
                  required=""
                />
              </Form.Group>

              {/* Checkbox */}
              <div className="d-lg-flex justify-content-between align-items-center mb-4">
                <Form.Check type="checkbox" id="rememberme">
                  <Form.Check.Input type="checkbox" />
                  <Form.Check.Label>Remember me</Form.Check.Label>
                </Form.Check>
              </div>
              <div>
                {/* Button */}
                <div className="d-grid">
                  <Button variant="primary" type="submit">
                    Sign In
                  </Button>
                </div>
                <div className="d-md-flex justify-content-between mt-4">
                  <div className="mb-2 mb-md-0">
                    <Link href="/authentication/sign-up" className="fs-5">
                      Create An Account{" "}
                    </Link>
                  </div>
                  <div>
                    <Link
                      href="/authentication/forget-password"
                      className="text-inherit fs-5"
                    >
                      Forgot your password?
                    </Link>
                  </div>
                </div>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </Col>
    </Row>

  //  <div className="container mx-auto">
  //       <div className="flex justify-center px-6 my-12">
  //         <div className="w-full xl:w-3/4 lg:w-11/12 flex">
  //           <div
  //             className="w-full h-auto bg-gray-400 hidden lg:block lg:w-1/2 bg-cover rounded-l-lg"
  //             style={{
  //               backgroundImage:
  //                 'url("https://firebasestorage.googleapis.com/v0/b/organic-market-ph.appspot.com/o/Saffron%2Foriginal%2Fsaffron-in-a-spoon-2023-11-27-04-59-15-utc.jpg?alt=media&token=abc47b95-8143-4c51-a058-f7807ea51449")',
  //             }}
  //           />
  //           <div className="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
  //             <h3 className="pt-4 text-2xl text-center">Welcome Back!</h3>
  //             <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
  //               <div className="mb-4">
  //                 <label
  //                   className="block mb-2 text-sm font-bold text-gray-700"
  //                   htmlFor="username"
  //                 >
  //                   Username
  //                 </label>
  //                 <input
  //                   className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
  //                   id="username"
  //                   type="text"
  //                   placeholder="Username"
  //                 />
  //               </div>
  //               <div className="mb-4">
  //                 <label
  //                   className="block mb-2 text-sm font-bold text-gray-700"
  //                   htmlFor="password"
  //                 >
  //                   Password
  //                 </label>
  //                 <input
  //                   className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
  //                   id="password"
  //                   type="password"
  //                   placeholder="******************"
  //                 />
  //                 <p className="text-xs italic text-red-500">
  //                   Please choose a password.
  //                 </p>
  //               </div>
  //               <div className="mb-4">
  //                 <input
  //                   className="mr-2 leading-tight"
  //                   type="checkbox"
  //                   id="checkbox_id"
  //                 />
  //                 <label className="text-sm" htmlFor="checkbox_id">
  //                   Remember Me
  //                 </label>
  //               </div>
  //               <div className="mb-6 text-center">
  //                 <button
  //                   className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
  //                   type="button"
  //                 >
  //                   Sign In
  //                 </button>
  //               </div>
  //               <hr className="mb-6 border-t" />
  //               <div className="text-center">
  //                 <a
  //                   className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
  //                   href="#"
  //                 >
  //                   Create an Account!
  //                 </a>
  //               </div>
  //               <div className="text-center">
  //                 <a
  //                   className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
  //                   href="#"
  //                 >
  //                   Forgot Password?
  //                 </a>
  //               </div>
  //             </form>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
    
  );
};

SignIn.Layout = AuthLayout;

export default SignIn;
