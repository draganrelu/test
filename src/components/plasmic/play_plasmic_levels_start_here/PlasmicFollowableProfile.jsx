// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: fiUhXe8Zsj5ebqGZX94BP2
// Component: HBRcdoHSsVXpr9
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import ActionButton from "../../ActionButton"; // plasmic-import: ux4FEnyvpYD0Ev/component
import BlockButton from "../../BlockButton"; // plasmic-import: -qLogf7mg_p55n/component
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_play_plasmic_levels_start_here.module.css"; // plasmic-import: fiUhXe8Zsj5ebqGZX94BP2/projectcss
import * as sty from "./PlasmicFollowableProfile.module.css"; // plasmic-import: HBRcdoHSsVXpr9/css
import image115Ys3I8AdEmYCbp from "./images/image11.png"; // plasmic-import: 5ys3i8ADEmYCbp/picture

export const PlasmicFollowableProfile__VariantProps = new Array("following");

export const PlasmicFollowableProfile__ArgProps = new Array();

function PlasmicFollowableProfile__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root, {
        [sty.root__following]: hasVariant(variants, "following", "following")
      })}
    >
      <img
        data-plasmic-name={"img"}
        data-plasmic-override={overrides.img}
        alt={""}
        className={classNames(defaultcss.img, sty.img, {
          [sty.img__following]: hasVariant(variants, "following", "following")
        })}
        role={"img"}
        src={image115Ys3I8AdEmYCbp}
      />

      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(defaultcss.all, sty.box__fzkZd, {
          [sty.box__following__fzkZdfRwmb]: hasVariant(
            variants,
            "following",
            "following"
          )
        })}
      >
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(defaultcss.all, sty.box__o7H9, {
            [sty.box__following__o7H9FRwmb]: hasVariant(
              variants,
              "following",
              "following"
            )
          })}
        >
          <div
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.box__iJlvq,
              {
                [sty.box__following__iJlvQfRwmb]: hasVariant(
                  variants,
                  "following",
                  "following"
                )
              }
            )}
          >
            {"Totoro"}
          </div>
        </p.Stack>

        <div
          className={classNames(
            defaultcss.all,
            defaultcss.__wab_text,
            sty.box__hPsXv,
            {
              [sty.box__following__hPsXVfRwmb]: hasVariant(
                variants,
                "following",
                "following"
              )
            }
          )}
        >
          {"@friendlyneighbor"}
        </div>
      </p.Stack>

      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(defaultcss.all, sty.box__xgh1U)}
      >
        <ActionButton
          data-plasmic-name={"actionButton"}
          data-plasmic-override={overrides.actionButton}
          className={classNames("__wab_instance", sty.actionButton, {
            [sty.actionButton__following]: hasVariant(
              variants,
              "following",
              "following"
            )
          })}
        >
          {"Follow"}
        </ActionButton>

        <BlockButton
          data-plasmic-name={"blockButton"}
          data-plasmic-override={overrides.blockButton}
          className={classNames("__wab_instance", sty.blockButton, {
            [sty.blockButton__following]: hasVariant(
              variants,
              "following",
              "following"
            )
          })}
        />
      </p.Stack>
    </p.Stack>
  );
}

const PlasmicDescendants = {
  root: ["root", "img", "actionButton", "blockButton"],
  img: ["img"],
  actionButton: ["actionButton"],
  blockButton: ["blockButton"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicFollowableProfile__ArgProps,
      internalVariantPropNames: PlasmicFollowableProfile__VariantProps
    });

    return PlasmicFollowableProfile__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicFollowableProfile";
  } else {
    func.displayName = `PlasmicFollowableProfile.${nodeName}`;
  }
  return func;
}

export const PlasmicFollowableProfile = Object.assign(
  // Top-level PlasmicFollowableProfile renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    img: makeNodeComponent("img"),
    actionButton: makeNodeComponent("actionButton"),
    blockButton: makeNodeComponent("blockButton"),
    // Metadata about props expected for PlasmicFollowableProfile
    internalVariantProps: PlasmicFollowableProfile__VariantProps,
    internalArgProps: PlasmicFollowableProfile__ArgProps
  }
);

export default PlasmicFollowableProfile;
/* prettier-ignore-end */