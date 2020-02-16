import React, { Component } from 'react'
import Table from 'react-bootstrap/Table'
import styled from 'styled-components'
import {Button} from 'semantic-ui-react'
const ContentTable = styled.div.attrs({
    className: 'contentTabble'
})`
    width: 15%;
    height: auto;
`
class Toc extends Component {
    render() {
        return (
            <React.Fragment>
                <ContentTable>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>
                                    Danh muc san pham  
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <a href="#">
                                        Dien thoai
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <a href="#">
                                        Sach
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <a href="#">
                                        Do dien tu
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                    <Button>
                        Hello
                    </Button>
                </ContentTable>
            </React.Fragment>





        )
    }
}

export default Toc