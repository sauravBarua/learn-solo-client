import React from "react";

const Blog = () => {
  return (
    <div>
      <h3> What is cors?</h3>
      <p>
        Ans: Ans: Cross-Origin Resource Sharing (CORS) is an HTTP-header based
        mechanism that allows a server to indicate any origins (domain, scheme,
        or port) other than its own from which a browser should permit loading
        resources. CORS also relies on a mechanism by which browsers make a
        "preflight" request to the server hosting the cross-origin resource, in
        order to check that the server will permit the actual request. In that
        preflight, the browser sends headers that indicate the HTTP method and
        headers that will be used in the actual request.
      </p>
      <h3>
        Why are you using firebase? What other options do you have to implement
        authentication?
      </h3>
      <p>
        Ans: Google’s Firebase is a well-rounded platform packed with features
        that make it easy for developers and marketers to build, release,
        monitor, and engage with their apps. If you’d like to discuss the
        current and future setup for your mobile application tracking and
        analytics, reach out to the team at InfoTrust. a. Password-based
        authentication b. Two-factor/multifactor authentication c. Biometric
        authentication D. Single sign-on E. Token-based authentication F.
        Certificate-based authentication
      </p>
      <h3>How does the private route work?</h3>
      <p>
        Ans: Ans: The private route component is similar to the public route,
        the only change is that redirect URL and authenticate condition. If the
        user is not authenticated he will be redirected to the login page and
        the user can only access the authenticated routes If he is
        authenticated.
      </p>
      <h3>What is Node? How does Node work?</h3>
      <p>
        Ans: Ans: Node.js is a JavaScript runtime environment that achieves low
        latency and high throughput by taking a “non-blocking” approach to
        serving requests. In other words, Node.js wastes no time or resources on
        waiting for I/O requests to return.
      </p>
    </div>
  );
};

export default Blog;
