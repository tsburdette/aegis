import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import DamageRow from "./DamageRow";

export default function DamageTable({ data }) {
  return (
    <Table>
      <Thead>
        <Tr>
          <Th>Timestamp</Th>
          <Th>Name</Th>
          <Th>Damage</Th>
          <Th>Mitigations</Th>
        </Tr>
      </Thead>
      <Tbody>
        {data.map((entry, index) => {
          return <DamageRow key={index} values={entry}></DamageRow>;
        })}
      </Tbody>
    </Table>
  )
}
