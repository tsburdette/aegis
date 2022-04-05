import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
} from "@chakra-ui/react";
import MitigationRow from "./MitigationRow";

export default function MitigationTable({ data }) {
  return (
    <Table>
      <Thead>
        <Tr>
          <Th>Timestamp</Th>
          <Th>Name</Th>
          <Th>Source</Th>
          <Th>Percent</Th>
          <Th>Duration</Th>
          <Th>Next Available</Th>
        </Tr>
      </Thead>
      <Tbody>
        {data.map((entry, index) => {
          return <MitigationRow key={index} values={entry}></MitigationRow>;
        })}
      </Tbody>
    </Table>
  )
}
