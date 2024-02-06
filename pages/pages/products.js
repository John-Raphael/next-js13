// import node module libraries
import InlineEditTable from '/hooks/InlineEditTable';
import { Col, Row, Container } from 'react-bootstrap';

// import widget as custom components
import { PageHeading } from 'widgets'

// import sub components
import {
  AboutMe,
  ActivityFeed,
  MyTeam,
  ProfileHeader,
  ProjectsContributions,
  RecentFromBlog
} from 'sub-components'

const Products = () => {
  return (
    <Container fluid className="p-6">
      {/* Page Heading */}
      <PageHeading heading="Update Products"/>



<InlineEditTable />


    </Container>
  )
}

export default Products