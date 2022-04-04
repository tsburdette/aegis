import { Tr, Td } from "@chakra-ui/react";
import styles from "./DamageRow.module.css";
import mitigationTimeline from "../timelines/mitigation.json";

function damageIsMitigated(
  damageTimestamp,
  mitigationStart,
  mitigationDuration
) {
  return (
    damageTimestamp > mitigationStart &&
    damageTimestamp < mitigationStart + mitigationDuration
  );
}

function mitigate(rawDamage, mitigation) {
  return rawDamage * (1 - mitigation / 100);
}

function zeroPad(numToPad, numZeroes) {
  return ("0".repeat(numZeroes) + numToPad).slice(-numZeroes);
}

function formatTimestamp(timestampInMs) {
  const minutes = zeroPad(Math.floor(timestampInMs / 60000), 2);
  const seconds = zeroPad((timestampInMs % 60000) / 1000, 2);
  return `${minutes}:${seconds}`;
}

export default function DamageRow({ values }) {
  var processedDamage = values.damage;
  var mitigationsApplied = [];
  var mitigationRatio = 1;
  mitigationTimeline.forEach((mitigationEntry) => {
    if (
      damageIsMitigated(
        values.timestamp,
        mitigationEntry.timestamp,
        mitigationEntry.duration
      )
    ) {
      processedDamage = mitigate(
        processedDamage,
        mitigationEntry.mitigationPercent
      );
      mitigationsApplied.push(mitigationEntry.name);
      mitigationRatio *= (1 - mitigationEntry.mitigationPercent / 100).toFixed(3);
    }
  });
  return (
    <Tr>
      <Td>{formatTimestamp(values.timestamp)}</Td>
      <Td>{values.name}</Td>
      <Td
        className={processedDamage != values.damage ? styles.mitigated : null}
      >
        {processedDamage}
      </Td>
      <Td>
        {`${mitigationsApplied.join(", ")} (${(100*(1-mitigationRatio)).toFixed(2)}%)`}
      </Td>
    </Tr>
  );
}
