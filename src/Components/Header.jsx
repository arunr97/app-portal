import { useRef } from "react";
import { Navbar ,Stack} from "react-bootstrap";
import { PersonCircle} from "react-bootstrap-icons";

export default function Header() {

    const searchInput = useRef("");

    return (<div className="header-comp">
        {/* <Form className="SearchBox">
            <InputGroup className="mb-3">
                <InputGroup.Text id="search">Search</InputGroup.Text>
                <FormControl ref={searchInput}
                    placeholder="Search"
                    aria-label="Search"
                    aria-describedby="search"
                />
            </InputGroup>
        </Form> */}
         <Navbar.Text className="header-text-end">
            <Stack direction="horizontal" gap={2}>
            <div className="ms-auto">{localStorage.getItem('UserName')}</div>
            <span>Administrator</span>
            <PersonCircle color="deepskyblue" size="30" />
            </Stack>
          </Navbar.Text>
    </div>)
}