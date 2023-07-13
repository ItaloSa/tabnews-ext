'use client';
import { Box, Header as PrimerHeader } from '@primer/react';
import { FileDirectorySymlinkIcon } from '@primer/octicons-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const activeLinkStyle = {
  textDecoration: 'underline',
  textUnderlineOffset: 6,
};

export function Header() {
  const pathname = usePathname();

  return (
    <PrimerHeader
      id="header"
      sx={{
        px: [2, null, null, 3],
      }}>
      <PrimerHeader.Item>
        <PrimerHeader.Link as={Link} href="/" aria-label="Voltar para a página inicial">
          <FileDirectorySymlinkIcon size={32} />
          <Box sx={{ ml: 2, display: ['none', 'block'] }}>TabNews Extensions</Box>
        </PrimerHeader.Link>
      </PrimerHeader.Item>

      <PrimerHeader.Item>
        <PrimerHeader.Link as={Link} href="/tags" sx={pathname === '/tags' || pathname.startsWith('/tags') ? activeLinkStyle : undefined}>
          Tags
        </PrimerHeader.Link>
      </PrimerHeader.Item>
    </PrimerHeader>
  );
}
