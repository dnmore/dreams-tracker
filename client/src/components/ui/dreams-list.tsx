import { SimpleGrid } from "@chakra-ui/react"
import { DreamCard } from "./dream-card"
import { Dream } from "../../store/dream"

type DreamsListProps = {
  dreams: Dream[]
}
export const DreamsList = ({dreams} : DreamsListProps) => {
    return(
        <SimpleGrid
          columns={{
            base: 1,
            md: 2,
          }}
          w={"full"}
          gap={4}
        >
          {dreams.map((dream) => (
            <DreamCard key={dream._id} dream={dream} />
          ))}
        </SimpleGrid>
    )
}