<!--https://www.lightningdesignsystem.com/components/breadcrumbs/-->
<template>
    <nav role="navigation" aria-label="Breadcrumbs">
        <ol class="breadcrumb list_horizontal wrap">
            <li class="breadcrumb__item text-title_caps">
                <a href="javascript:void(0);">Parent Entity</a>
            </li>
            <li class="breadcrumb__item text-title_caps">
                <a href="javascript:void(0);">Parent Record Name</a>
            </li>
        </ol>
    </nav>
</template>

<style lang="scss">
    .breadcrumb {

        /**
         * Item of the breadcrumb list
         *
         * @selector .breadcrumb__item
         * @restrict .breadcrumb li
         * @required
         */
        .list__item,
        &__item {
            position: relative;

            &:before {
                content: '\003E';
                position: absolute;
                left: (($spacing-x-small / 2) * -1);
            }

            > a {
                display: block;
                padding: 0 $spacing-x-small;

                &:hover {
                    text-decoration: none;
                }
            }

            &:first-child {

                > a {
                    padding-left: 0;
                }

                &:before {
                    content: '';
                }
            }
        }
    }
</style>