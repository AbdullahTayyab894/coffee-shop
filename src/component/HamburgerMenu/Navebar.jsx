import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { HashLink as Link } from 'react-router-hash-link';
import home from '../../img/home.png'
import my from '../../img/my.jpg'
import { List, ListItem } from '@mui/material';

const ResponsiveAppBar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="fixed"
            sx={{
                background: "rgb(32 23 18)"
            }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        <Link to="/">
                            <Avatar alt="Remy Sharp" src={home} />
                        </Link>

                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            <MenuItem onClick={handleCloseNavMenu}>
                                <List>
                                    <Link to="/" style={{
                                        textDecoration: "none",
                                    }}>
                                        <ListItem sx={{
                                            color: "black",
                                        }}>Home</ListItem>
                                    </Link><Link to="#about" smooth style={{
                                        textDecoration: "none",
                                    }}>
                                        <ListItem>About</ListItem>
                                    </Link><Link to="#blog" smooth style={{
                                        textDecoration: "none",
                                    }}>
                                        <ListItem>Blog</ListItem>

                                    </Link><Link to="#faq" smooth style={{
                                        textDecoration: "none",
                                    }}>
                                        <ListItem>Faq</ListItem>

                                    </Link>

                                </List>
                            </MenuItem>
                        </Menu>
                    </Box>
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        <Link to="/">
                            <Avatar alt="Remy Sharp" src={home} />
                        </Link>
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', color: "white" } }}>
                        <Link to="#home" smooth style={{
                            textDecoration: "none",
                        }}>
                            <Button sx={{
                                color: "white"
                            }}>
                                Home
                            </Button>
                        </Link>
                        <Link to="#about" smooth style={{
                            textDecoration: "none",
                        }}>
                            <Button sx={{
                                color: "white"
                            }}>
                                About
                            </Button>
                        </Link>
                        <Link to="#blog" smooth style={{
                            textDecoration: "none",
                        }}>
                            <Button sx={{
                                color: "white"
                            }}>
                                Blog
                            </Button>
                        </Link>
                        <Link to="#faq" smooth style={{
                            textDecoration: "none",
                        }}>
                            <Button sx={{
                                color: "white"
                            }}>
                                Faq
                            </Button>
                        </Link>
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="Remy Sharp" src={my} />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px', textAlign: "center" }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            <Link to="/Reservetable" style={{
                                textDecoration: "none"
                            }}>
                                <Button sx={{
                                    color: "black",
                                    fontWeight: "bold"
                                }}>
                                    Reserve Your Table
                                </Button>
                            </Link> <br />
                            <Link to="/contact" style={{
                                textDecoration: "none",
                            }}>
                                <Button sx={{
                                    color: "black",
                                    fontWeight: "bold"
                                }}>
                                    Contact us
                                </Button>
                            </Link> <br />
                            {/* <Link to="/location" style={{
                                textDecoration: "none",
                            }}>
                                <Button sx={{
                                    color: "black",
                                    fontWeight: "bold"
                                }}>
                                    Location
                                </Button>
                            </Link> <br /> */}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default ResponsiveAppBar;
