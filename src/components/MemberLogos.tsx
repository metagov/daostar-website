"use client";

import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface MemberOrganization {
  name: string;
  logo: string;
  url: string;
}

const memberOrganizations: MemberOrganization[] = [
  { name: "0x", logo: "/logos/0x.jpeg", url: "https://0x.org/" },
  { name: "1Hive", logo: "/logos/1hive.png", url: "https://1hive.org/" },
  { name: "Abridged", logo: "/logos/abridged.jpeg", url: "https://abridged.io/" },
  { name: "Agora Space", logo: "/logos/agora.png", url: "https://agora.xyz/" },
  { name: "Aragon", logo: "/logos/aragon.png", url: "https://aragon.org/" },
  { name: "BalancerDAO", logo: "/logos/balancer.png", url: "https://balancer.finance/" },
  { name: "Boardroom", logo: "/logos/boardroom.jpeg", url: "https://www.boardroom.info/" },
  { name: "Ceramic", logo: "/logos/ceramic.png", url: "https://ceramic.network/" },
  { name: "Charmverse", logo: "/logos/charmverse.png", url: "https://charmverse.io/" },
  { name: "Coinbase", logo: "/logos/coinbase.png", url: "https://www.coinbase.com/" },
  { name: "Colony", logo: "/logos/colony.png", url: "https://colony.io/" },
  { name: "Commonwealth", logo: "/logos/commonwealth.png", url: "https://commonwealth.im/" },
  { name: "Compound", logo: "/logos/compound.png", url: "https://compound.finance/" },
  { name: "Consensys", logo: "/logos/consensys.png", url: "https://consensys.net/" },
  { name: "Consensys Mesh", logo: "/logos/consensys-mesh.png", url: "https://mesh.xyz/" },
  { name: "Curve Labs", logo: "/logos/curvelabs.jpeg", url: "https://www.curvelabs.eu/" },
  { name: "DAO DAO", logo: "/logos/daodao.png", url: "https://daodao.zone/" },
  { name: "Developer DAO", logo: "/logos/developerdao.jpg", url: "https://www.developerdao.com/" },
  { name: "DAO Research Collective", logo: "/logos/daoresearchcollective.png", url: "https://www.daocollective.xyz/" },
  { name: "DAOstack", logo: "/logos/daostack.jpeg", url: "https://daostack.io/" },
  { name: "DeepDAO", logo: "/logos/deepdao.jpeg", url: "https://deepdao.io/" },
  { name: "dOrg", logo: "/logos/dorg.png", url: "https://www.dorg.tech/" },
  { name: "Ethereum Foundation", logo: "/logos/ethereumfoundation.png", url: "https://ethereum.org/en/foundation/" },
  { name: "Etherscan", logo: "/logos/etherscan.png", url: "https://etherscan.io/" },
  { name: "Figment", logo: "/logos/figment.jpeg", url: "https://www.figment.io/" },
  { name: "Galaxy Digital", logo: "/logos/galaxydigital.jpeg", url: "http://galaxydigital.io/" },
  { name: "Gitcoin", logo: "/logos/gitcoin.png", url: "https://gitcoin.co/" },
  { name: "GitHub", logo: "/logos/github.png", url: "https://github.com/" },
  { name: "Gnosis", logo: "/logos/gnosis.png", url: "https://gnosis.io/" },
  { name: "Govrn", logo: "/logos/govrn.png", url: "https://linktr.ee/Govrn" },
  { name: "Hats Protocol", logo: "/logos/hats.png", url: "https://www.hatsprotocol.xyz/" },
  { name: "Interchain Foundation", logo: "/logos/interchain.png", url: "https://interchain.io/" },
  { name: "Kleros", logo: "/logos/kleros.png", url: "https://kleros.io/" },
  { name: "kycDAO", logo: "/logos/kycdao.jpg", url: "https://kycdao.xyz/" },
  { name: "Lit Protocol", logo: "/logos/litprotocol.png", url: "https://litprotocol.com/" },
  { name: "LXDAO", logo: "/logos/lxdao.jpg", url: "https://lxdao.io/" },
  { name: "Messari", logo: "/logos/messari.jpeg", url: "https://messari.io/" },
  { name: "MetaCartel Ventures", logo: "/logos/metacartel.png", url: "https://metacartel.xyz/" },
  { name: "Metagov", logo: "/logos/metagov.png", url: "https://metagov.org/" },
  { name: "Orca Protocol", logo: "/logos/metropolis.jpg", url: "https://metropolis.sh/" },
  { name: "Mirror", logo: "/logos/mirror.png", url: "https://mirror.xyz/" },
  { name: "Moloch", logo: "/logos/moloch.jpeg", url: "https://github.com/MolochVentures/moloch" },
  { name: "NEAR", logo: "/logos/near.png", url: "https://near.org/" },
  { name: "OlympusDAO", logo: "/logos/olympusdao.jpeg", url: "https://www.olympusdao.finance/" },
  { name: "OpenZeppelin", logo: "/logos/openzeppelin.jpeg", url: "https://openzeppelin.com/" },
  { name: "Opolis", logo: "/logos/opolis.png", url: "https://opolis.co/" },
  { name: "Other Internet", logo: "/logos/otherinternet.png", url: "https://otherinter.net/" },
  { name: "Otterspace", logo: "/logos/otterspace.png", url: "https://otterspace.xyz/" },
  { name: "Paladin", logo: "/logos/paladin.png", url: "https://paladin.vote/" },
  { name: "Polygon DAO", logo: "/logos/polygondao.webp", url: "https://polygon.community/" },
  { name: "Protocol Labs", logo: "/logos/protocol.png", url: "https://protocol.ai/" },
  { name: "Q Blockchain", logo: "/logos/Q-logo-green.png", url: "https://q.org/" },
  { name: "Rabbit Hole", logo: "/logos/rabbithole.jpg", url: "https://rabbithole.gg/" },
  { name: "RadicalxChange", logo: "/logos/radicalxchange.png", url: "https://www.radicalxchange.org/" },
  { name: "Radicle", logo: "/logos/radicle.png", url: "https://radicle.xyz/" },
  { name: "Sismo", logo: "/logos/sismo.png", url: "https://sismo.io/" },
  { name: "Samudai", logo: "/logos/samudai.png", url: "https://samudai.xyz" },
  { name: "Smart Contract Research Forum", logo: "/logos/scrf.png", url: "https://www.smartcontractresearch.org/" },
  { name: "Snapshot", logo: "/logos/snapshot.jpeg", url: "https://snapshot.org/" },
  { name: "Solana", logo: "/logos/solana.png", url: "https://solana.com/" },
  { name: "Spruce", logo: "/logos/spruce.jpeg", url: "https://www.spruceid.com/" },
  { name: "Station", logo: "/logos/station.jpg", url: "https://www.station.express/" },
  { name: "Superdao", logo: "/logos/superdao.png", url: "https://superdao.co/" },
  { name: "Syndicate", logo: "/logos/syndicate.jpeg", url: "https://syndicate.io/" },
  { name: "Tally", logo: "/logos/tally.jpeg", url: "https://www.withtally.com/" },
  { name: "Tenderly", logo: "/logos/tenderly.jpeg", url: "https://tenderly.co/" },
  { name: "Tribute Labs", logo: "/logos/tribute.png", url: "https://tributedao.com/" },
  { name: "Utopia Labs", logo: "/logos/utopialabs.webp", url: "https://www.utopialabs.com/" },
  { name: "Wildfire DAO", logo: "/logos/wildfiredao.png", url: "https://mirror.xyz/james.eth/71ibzWJvs3Frqu3beIzAtcQu5sJ2k8Hz15svQhBWKvI" },
  { name: "Wonderverse", logo: "/logos/wonderverse.png", url: "https://www.wonderverse.xyz/" },
];

const MemberLogos: React.FC = () => {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6">
      {memberOrganizations.map((org) => (
        <a
          key={org.name}
          href={org.url}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "group relative aspect-square bg-white/5 rounded-lg p-3 backdrop-blur-sm border border-white/10",
            "transition-all duration-300 hover:bg-white/10 hover:border-brand-accent hover:-translate-y-1",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent/30"
          )}
          aria-label={org.name}
        >
          <div className="relative w-full h-full flex items-center justify-center">
            <Image
              src={org.logo}
              alt={org.name}
              fill
              className="object-contain p-1 transition-all duration-300 group-hover:scale-105"
              sizes="(max-width: 640px) 33vw, (max-width: 768px) 25vw, (max-width: 1024px) 16vw, 12vw"
            />
          </div>
        </a>
      ))}
    </div>
  );
};

export default MemberLogos;