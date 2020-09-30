import React from "react";

import Layout from "components/Layout";
import SEO from "components/SEO";
import Posts from "components/Posts";
import ContactCard from "components/ContactCard";

const BlogPage: React.FC = () => {
    return (
        <Layout>
            <SEO title="Blog" />
            <Posts />
            <ContactCard />
        </Layout>
    );
};

export default BlogPage;
