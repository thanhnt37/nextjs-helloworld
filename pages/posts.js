import React, {Component} from 'react'
import Layout from '../components/layouts'

class Post extends Component {
    static getInitialProps = async (request) => {
        console.log(process.browser ? "render from client" : "render from server");
        console.log("message from Posts.getInitialProps()", request.query);

        return {postId: request.query.slug}
    };

    render() {
        return (
            <Layout>
                <h1>My blog post #{this.props.postId}</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
            </Layout>
        )
    }
}

export default Post;