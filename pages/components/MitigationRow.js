import { Tr, Td } from "@chakra-ui/react";
import styles from "./DamageRow.module.css";

function zeroPad(numToPad, numZeroes) {
  return ("0".repeat(numZeroes) + numToPad).slice(-numZeroes);
}

function formatTimestamp(timestampInMs) {
  const minutes = zeroPad(Math.floor(timestampInMs / 60000), 2);
  const seconds = zeroPad((timestampInMs % 60000) / 1000, 2);
  return `${minutes}:${seconds}`;
}

export default function MitigationRow({ values }) {
  return (
    <Tr>
      <Td>{formatTimestamp(values.timestamp)}</Td>
      <Td>{values.name}</Td>
      <Td>{values.source}</Td>
      <Td>
        {`${values.mitigationPercent}%`}
      </Td>
      <Td>
        {(values.duration / 1000).toFixed(0)}
      </Td>
      <Td>
        {formatTimestamp(values.timestamp + values.cooldown)}
      </Td>
    </Tr>
  );
}
